/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, ClipboardList, CheckCircle2, XCircle, Clock, RotateCcw, ChevronRight, Home, LayoutList, Trash2 } from 'lucide-react';
import { Question, QuestionType, QuizState } from './types';
import { QUESTIONS } from './data/questions';

export default function App() {
  const [view, setView] = useState<'home' | 'practice' | 'exam' | 'errors'>('home');
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
  const [showExplanation, setShowExplanation] = useState(false);
  const [errorIds, setErrorIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('mistake_notebook');
    return saved ? JSON.parse(saved) : [];
  });

  // Save mistakes to localStorage
  useEffect(() => {
    localStorage.setItem('mistake_notebook', JSON.stringify(errorIds));
  }, [errorIds]);

  // Exam timer
  useEffect(() => {
    if (view === 'exam' && quizState && !quizState.isFinished) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 0) {
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [view, quizState]);

  const removeFromMistakes = (id: number) => {
    const updatedErrors = errorIds.filter(eid => eid !== id);
    setErrorIds(updatedErrors);
    
    // If we're in error review mode, move to next
    if (view === 'errors' && quizState) {
      if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
        nextQuestion();
      } else {
        setView('home');
        setQuizState(null);
      }
    }
  };

  const startPractice = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setQuizState({
      currentQuestionIndex: 0,
      questions: shuffled,
      userAnswers: {},
      isFinished: false,
      startTime: Date.now(),
      mistakes: []
    });
    setShowExplanation(false);
    setView('practice');
  };

  const startExam = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 50);
    setQuizState({
      currentQuestionIndex: 0,
      questions: shuffled,
      userAnswers: {},
      isFinished: false,
      startTime: Date.now(),
      mistakes: []
    });
    setTimeRemaining(1800);
    setShowExplanation(false);
    setView('exam');
  };

  const startErrorReview = () => {
    const errorQuestions = QUESTIONS.filter(q => errorIds.includes(q.id));
    if (errorQuestions.length === 0) {
      alert("目前还没有错题收录哦！");
      return;
    }
    setQuizState({
      currentQuestionIndex: 0,
      questions: errorQuestions,
      userAnswers: {},
      isFinished: false,
      startTime: Date.now(),
      mistakes: []
    });
    setShowExplanation(false);
    setView('errors');
  };

  const handleAnswerChange = (answer: string) => {
    if (!quizState || quizState.isFinished) return;

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.answer;

    setQuizState({
      ...quizState,
      userAnswers: { ...quizState.userAnswers, [currentQuestion.id]: answer }
    });

    if (!isCorrect) {
      setErrorIds(prev => Array.from(new Set([...prev, currentQuestion.id])));
    } else {
      localStorage.setItem(`answered_${currentQuestion.id}`, 'true');
    }

    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (!quizState) return;
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1
      });
      setShowExplanation(false);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    if (!quizState) return;
    setQuizState({
      ...quizState,
      isFinished: true,
      endTime: Date.now()
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    if (!quizState) return 0;
    let correct = 0;
    quizState.questions.forEach(q => {
      if (quizState.userAnswers[q.id] === q.answer) correct++;
    });
    return Math.round((correct / quizState.questions.length) * 100);
  };

  const renderHome = () => (
    <div className="flex flex-col items-center justify-center min-h-full px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl lg:text-8xl font-serif text-white mb-8 tracking-tighter italic leading-none">
          经济法<span className="text-amber-500 not-italic">.</span>题库
        </h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-8 bg-zinc-800" />
          <p className="text-zinc-500 text-[10px] lg:text-xs uppercase tracking-[0.4em] font-bold">
             精选题目 · 助力专业复习
          </p>
          <div className="h-px w-8 bg-zinc-800" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          { id: 'practice', title: '随机刷题', icon: BookOpen, color: 'text-amber-500', desc: '题库随机练习，支持即时解析', action: startPractice },
          { id: 'exam', title: '模拟考试', icon: GraduationCap, color: 'text-emerald-500', desc: '随机50题，30分钟限时挑战考试', action: startExam },
          { id: 'errors', title: '错题本', icon: ClipboardList, color: 'text-rose-500', desc: `精选错题集中温习 (${errorIds.length} 道)`, action: startErrorReview },
        ].map((mode, index) => (
          <motion.button
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={mode.action}
            className="flex flex-col items-start p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-all group text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <mode.icon size={80} />
            </div>
            <div className={`p-3 rounded-lg bg-zinc-800 ${mode.color} mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all`}>
              <mode.icon size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">{mode.title}</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">{mode.desc}</p>
            <div className="mt-auto flex items-center gap-2 text-amber-500 font-bold text-sm">
              进入模式 <ChevronRight size={16} />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderQuestion = (q: Question, state: QuizState) => {
    const currentAnswer = state.userAnswers[q.id];
    const isAnswered = !!currentAnswer;
    const isCorrect = currentAnswer === q.answer;

    return (
      <div className="flex-1 flex flex-col h-full">
        <div className="flex-1 p-6 lg:p-12 overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full">
            <div className="flex items-center justify-between mb-6 lg:mb-8">
               <div className="flex items-center gap-4">
                 <span className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-[10px] font-bold uppercase tracking-widest">
                  {q.type === QuestionType.MULTIPLE_CHOICE ? '单选题' : q.type === QuestionType.TRUE_FALSE ? '判断题' : '填空题'}
                </span>
               </div>
               {view === 'errors' && (
                 <button 
                  onClick={() => removeFromMistakes(q.id)}
                  className="text-[10px] text-rose-500 hover:text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                 >
                   <Trash2 size={12} /> 移出错题本
                 </button>
               )}
            </div>

            <h2 className="text-2xl lg:text-3xl font-serif text-white leading-relaxed mb-8 lg:mb-12">
              <span className="text-amber-500 mr-3 lg:mr-4">{state.questions.findIndex(question => question.id === q.id) + 1}.</span>
              {q.title}
            </h2>

            <div className="space-y-3 lg:space-y-4">
              {q.type === QuestionType.MULTIPLE_CHOICE && q.options?.map((opt) => {
                const letter = opt.charAt(0);
                const isSelected = currentAnswer === letter;
                const isCorrectOption = letter === q.answer;
                const optText = opt.replace(/^[A-Z][.．]\s*/i, '');

                let borderStyle = 'border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-800/50';
                let circleStyle = 'border-zinc-700 text-zinc-500';

                if (isAnswered) {
                  if (isSelected && isCorrect) {
                     borderStyle = 'border-emerald-500 bg-emerald-500/5';
                     circleStyle = 'bg-emerald-500 text-black border-emerald-500';
                  } else if (isSelected && !isCorrect) {
                     borderStyle = 'border-rose-500 bg-rose-500/5';
                     circleStyle = 'bg-rose-500 text-black border-rose-500';
                  } else if (isCorrectOption && (view === 'practice' || view === 'errors')) {
                     borderStyle = 'border-emerald-500/30 bg-emerald-500/5';
                     circleStyle = 'border-emerald-500 text-emerald-500';
                  }
                }

                return (
                  <button
                    key={opt}
                    disabled={isAnswered && (view === 'practice' || view === 'errors')}
                    onClick={() => handleAnswerChange(letter)}
                    className={`w-full group flex items-center text-left p-5 rounded-xl border transition-all ${borderStyle} relative`}
                  >
                    <span className={`w-8 h-8 rounded border flex items-center justify-center mr-4 font-mono transition-all shrink-0 ${circleStyle} group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500`}>
                      {letter}
                    </span>
                    <span className={`text-zinc-300 transition-colors ${isSelected ? 'text-white font-medium' : ''}`}>{optText}</span>
                    {isSelected && (
                        <div className="absolute right-5">
                            {isCorrect ? <CheckCircle2 size={20} className="text-emerald-500" /> : <XCircle size={20} className="text-rose-500" />}
                        </div>
                    )}
                  </button>
                );
              })}

              {q.type === QuestionType.TRUE_FALSE && (
                <div className="grid grid-cols-2 gap-6">
                  {['√', '×'].map((opt) => {
                    const isSelected = currentAnswer === opt;
                    const isCorrectOption = opt === q.answer;

                    let borderStyle = 'border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-800/50';
                    if (isAnswered) {
                      if (isSelected && isCorrect) borderStyle = 'border-emerald-500 bg-emerald-500/5 text-emerald-500';
                      else if (isSelected && !isCorrect) borderStyle = 'border-rose-500 bg-rose-500/5 text-rose-500';
                      else if (isCorrectOption && (view === 'practice' || view === 'errors')) borderStyle = 'border-emerald-500/30 text-emerald-500';
                    }

                    return (
                      <button
                        key={opt}
                        disabled={isAnswered && (view === 'practice' || view === 'errors')}
                        onClick={() => handleAnswerChange(opt)}
                        className={`text-center p-8 rounded-2xl border transition-all text-4xl font-bold ${borderStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === QuestionType.FILL_IN && (
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      disabled={isAnswered && (view === 'practice' || view === 'errors')}
                      placeholder="在此处输入您的答案..."
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAnswerChange((e.target as HTMLInputElement).value.trim());
                      }}
                      className={`flex-1 p-5 rounded-xl border bg-zinc-900 text-white outline-none transition-all ${isAnswered ? (isCorrect ? 'border-emerald-500' : 'border-rose-500') : 'border-zinc-800 focus:border-amber-500'}`}
                    />
                    {!isAnswered && (
                       <button 
                        onClick={() => {
                            const input = document.querySelector('input') as HTMLInputElement;
                            if (input) handleAnswerChange(input.value.trim());
                        }}
                        className="px-8 bg-amber-500 text-black rounded-xl font-bold hover:bg-amber-600 transition-colors"
                       >
                         提交答案
                       </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feedback Section Overlay */}
        <AnimatePresence>
          {showExplanation && (
             <motion.section 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="mx-4 lg:mx-8 mb-4 lg:mb-8 p-6 lg:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col lg:flex-row gap-6 lg:gap-10 items-start z-40"
             >
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-3 lg:mb-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-black ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                        {isCorrect ? '正确' : '错误'}
                    </span>
                    <h4 className={`text-sm lg:text-base font-medium ${isCorrect ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {isCorrect ? '回答正确' : `正确答案是：${q.answer}`}
                    </h4>
                  </div>
                  <p className="text-zinc-400 text-xs lg:text-sm leading-relaxed max-h-32 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-zinc-800">
                    <span className="text-zinc-200 font-bold block mb-1">详细解析：</span>
                    {q.explanation}
                  </p>
                </div>
                <div className="w-full lg:w-48 lg:border-l border-zinc-800 lg:pl-10 flex flex-col gap-4 self-stretch justify-end">
                  <button 
                    onClick={nextQuestion}
                    className="w-full bg-white text-black text-sm lg:text-base font-bold py-3 lg:py-4 rounded-xl hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
                  >
                    下一题 <ChevronRight size={18} />
                  </button>
                </div>
             </motion.section>
          )}
        </AnimatePresence>

        {!showExplanation && view === 'exam' && (
             <div className="px-8 pb-8 flex justify-end">
                <div className="flex gap-4">
                    <button
                        onClick={() => {
                            if (state.currentQuestionIndex > 0) {
                                setQuizState({...state, currentQuestionIndex: state.currentQuestionIndex - 1});
                            }
                        }}
                        className="px-6 py-3 border border-zinc-800 rounded-xl text-zinc-400 font-medium hover:bg-zinc-900 transition-colors"
                    >
                        上一题
                    </button>
                    <button
                        onClick={nextQuestion}
                        className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-amber-500 transition-colors shadow-lg"
                    >
                        {state.currentQuestionIndex === state.questions.length - 1 ? '提交试卷' : '下一题'}
                    </button>
                </div>
             </div>
        )}
      </div>
    );
  };

  const renderResult = () => {
    if (!quizState) return null;
    const score = calculateScore();
    const correctCount = quizState.questions.filter(q => quizState.userAnswers[q.id] === q.answer).length;

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#09090b]">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-zinc-900 rounded-2xl lg:rounded-3xl border border-zinc-800 p-8 lg:p-12 w-full max-w-2xl text-center shadow-2xl"
        >
          <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full mx-auto flex items-center justify-center mb-6 lg:mb-10 ${score >= 60 ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'}`}>
            <GraduationCap size={40} />
          </div>
          
          <h2 className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500 mb-2">测试结果分析</h2>
          <h3 className="text-2xl lg:text-3xl font-serif text-white mb-6 lg:mb-8">测试圆满完成</h3>
          
          <div className="flex items-baseline justify-center gap-2 mb-8 lg:mb-12">
            <span className="text-6xl lg:text-8xl font-black text-white tracking-tighter">{score}</span>
            <span className="text-xl lg:text-2xl text-zinc-500 font-light">分</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-10 lg:mb-12">
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/50 text-center">
              <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1 lg:mb-2">正确率</div>
              <div className="text-2xl lg:text-3xl font-bold text-emerald-500">{Math.round((correctCount/quizState.questions.length)*100)}%</div>
            </div>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/50 text-center">
              <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1 lg:mb-2">耗时</div>
              <div className="text-2xl lg:text-3xl font-bold text-amber-500 font-mono">{formatTime((quizState.endTime! - quizState.startTime) / 1000)}</div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6 text-zinc-500">
                <LayoutList size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">答题清单 (1-50)</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
                {quizState.questions.map((q, idx) => {
                    const isCorrect = quizState.userAnswers[q.id] === q.answer;
                    const isAnswered = !!quizState.userAnswers[q.id];
                    return (
                        <div 
                            key={idx}
                            title={`第 ${idx + 1} 题: ${isAnswered ? (isCorrect ? '正确' : '错误') : '未选'}`}
                            className={`h-10 rounded-lg border flex items-center justify-center text-xs font-bold font-mono transition-all
                                ${isAnswered 
                                    ? (isCorrect 
                                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.1)]' 
                                        : 'bg-rose-500/10 border-rose-500/30 text-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.1)]')
                                    : 'bg-zinc-800/50 border-zinc-700 text-zinc-500'}
                            `}
                        >
                            {idx + 1}
                        </div>
                    );
                })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setView('home')}
              className="flex-1 px-8 py-4 bg-zinc-800 text-zinc-100 rounded-xl font-bold hover:bg-zinc-700 transition-colors"
            >
              返回大厅
            </button>
            <button 
              onClick={startExam}
              className="flex-1 px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-amber-500 transition-all shadow-lg"
            >
              重新考试
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden">
      {/* Sidebar navigation */}
      <aside className="hidden lg:flex w-72 border-r border-zinc-800 bg-[#0c0c0e] flex-col shrink-0">
        <div className="p-10">
          <div className="flex items-center gap-3 mb-12 cursor-pointer group" onClick={() => setView('home')}>
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-black font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              < GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">经济法题库</span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest leading-none">专业、高效、沉浸</span>
            </div>
          </div>
          
          <nav className="space-y-2">
            {[
              { id: 'practice', title: '随机刷题', icon: BookOpen, action: startPractice },
              { id: 'exam', title: '模拟考试', icon: GraduationCap, action: startExam },
              { id: 'errors', title: '错题本', icon: ClipboardList, action: startErrorReview },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={btn.action}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all font-medium ${view === btn.id ? 'bg-zinc-800 text-white shadow-xl border border-zinc-700/50 translate-x-1' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'}`}
              >
                <btn.icon size={20} className={view === btn.id ? 'text-amber-500' : 'opacity-40'} />
                <span>{btn.title}</span>
                {btn.id === 'errors' && errorIds.length > 0 && (
                  <span className="ml-auto bg-rose-500/10 text-rose-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-500/20">
                    {errorIds.length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-zinc-800 bg-[#0c0c0e]">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-black font-black">
            <GraduationCap size={18} />
          </div>
          <span className="font-bold text-lg text-white">经济法题库</span>
        </div>
        <div className="flex gap-4">
            <button onClick={startPractice} className={`p-2 rounded-lg ${view === 'practice' ? 'text-amber-500' : 'text-zinc-500'}`}><BookOpen size={20} /></button>
            <button onClick={startExam} className={`p-2 rounded-lg ${view === 'exam' ? 'text-amber-500' : 'text-zinc-500'}`}><GraduationCap size={20} /></button>
            <button onClick={startErrorReview} className={`p-2 rounded-lg relative ${view === 'errors' ? 'text-amber-500' : 'text-zinc-500'}`}>
              <ClipboardList size={20} />
              {errorIds.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 text-[8px] font-bold text-white flex items-center justify-center rounded-full border border-zinc-900 leading-none">
                  {errorIds.length}
                </span>
              )}
            </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {view !== 'home' && (
            <header className="h-16 lg:h-20 border-b border-zinc-800 px-6 lg:px-12 flex items-center justify-between bg-[#09090b]/80 backdrop-blur-md z-30 shrink-0">
                <div className="flex items-center gap-6">
                    <span className="text-xs lg:text-sm text-zinc-500 font-medium uppercase tracking-widest truncate max-w-[120px] lg:max-w-none">
                       {view === 'practice' ? '练习模式' : view === 'exam' ? '考试模式' : '错题复习'}
                    </span>
                    {quizState && !quizState.isFinished && (
                        <>
                            <span className="w-px h-6 bg-zinc-800"></span>
                            <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                                <div className="flex flex-col gap-1.5 justify-center min-w-[100px] lg:min-w-[150px]">
                                    <div className="flex items-center justify-end">
                                         <span className="text-xs text-amber-500 font-mono font-bold leading-none">{Math.round(((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100)}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100}%` }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                                <span className="text-xs lg:text-sm text-zinc-500 font-mono font-medium hidden sm:inline whitespace-nowrap">
                                    {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                                </span>
                            </div>
                        </>
                    )}
                </div>
                
                <div className="flex items-center gap-4 lg:gap-8">
                    {view === 'exam' && quizState && !quizState.isFinished && (
                         <>
                            <div className="flex items-center gap-2 font-mono text-zinc-500 mr-1 lg:mr-2">
                                <span className="text-[10px] lg:text-xs uppercase tracking-wider">得分:</span>
                                <span className="text-amber-500 font-bold text-sm lg:text-base">{Object.entries(quizState.userAnswers).reduce((acc, [qid, ans]) => {
                                    const q = quizState.questions.find(q => q.id === Number(qid));
                                    return q?.answer === ans ? acc + 2 : acc;
                                }, 0)}</span>
                            </div>
                            <div className={`flex items-center gap-2.5 font-mono font-bold px-4 py-1.5 rounded border ${timeRemaining < 300 ? 'bg-rose-500/10 border-rose-500/30 text-rose-500 animate-pulse' : 'bg-amber-500/5 border-amber-500/20 text-amber-500'}`}>
                                <Clock size={14} />
                                <span className="text-sm lg:text-base">{formatTime(timeRemaining)}</span>
                            </div>
                         </>
                    )}
                    <button 
                        onClick={() => setView('home')}
                        className="p-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <Home size={20} />
                    </button>
                </div>
            </header>
        )}

        <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={view + (quizState?.isFinished ? '_finished' : '_running')}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                >
                    {view === 'home' ? renderHome() : (
                        quizState?.isFinished ? renderResult() : renderQuestion(quizState!.questions[quizState!.currentQuestionIndex], quizState!)
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

