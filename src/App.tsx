/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, ClipboardList, CheckCircle2, XCircle, Clock, RotateCcw, ChevronRight, Home, LayoutList, Trash2, LayoutGrid, Menu } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>([
    QuestionType.MULTIPLE_CHOICE,
    QuestionType.FILL_IN,
    QuestionType.TRUE_FALSE
  ]);

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

  const toggleType = (type: QuestionType) => {
    setSelectedTypes(prev => {
      if (prev.includes(type)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter(t => t !== type);
      }
      return [...prev, type];
    });
  };

  const getFilteredQuestions = (source: Question[]) => {
    return source.filter(q => selectedTypes.includes(q.type));
  };

  const navigateTo = (newView: 'home' | 'practice' | 'exam' | 'errors') => {
    setIsMobileMenuOpen(false);
    if (newView === 'home') {
      setView('home');
      setQuizState(null);
      return;
    }

    if (newView === 'practice') startPractice();
    else if (newView === 'exam') startExam();
    else if (newView === 'errors') startErrorReview();
  };

  const startPractice = () => {
    const filtered = getFilteredQuestions(QUESTIONS);
    if (filtered.length === 0) {
      alert("所选题型没有题目哦！");
      return;
    }
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setShowExplanation(false);
    setQuizState({
      currentQuestionIndex: 0,
      questions: shuffled,
      userAnswers: {},
      isFinished: false,
      startTime: Date.now(),
      mistakes: []
    });
    setView('practice');
  };

  const startExam = () => {
    const filtered = getFilteredQuestions(QUESTIONS);
    if (filtered.length === 0) {
      alert("所选题型没有题目哦！");
      return;
    }
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 50);
    setShowExplanation(false);
    setTimeRemaining(1800);
    setQuizState({
      currentQuestionIndex: 0,
      questions: shuffled,
      userAnswers: {},
      isFinished: false,
      startTime: Date.now(),
      mistakes: []
    });
    setView('exam');
  };

  const startErrorReview = () => {
    // Ensure ids are compared as numbers
    const validIds = errorIds.map(id => Number(id));
    const errorQuestions = QUESTIONS.filter(q => validIds.includes(Number(q.id)));
    const filtered = getFilteredQuestions(errorQuestions);
    
    if (filtered.length === 0) {
      alert(errorIds.length === 0 ? "目前还没有错题收录哦！" : "所选题型中没有错题哦！");
      return;
    }

    setShowExplanation(false);
    setQuizState({
      currentQuestionIndex: 0,
      questions: filtered,
      userAnswers: {},
      isFinished: false,
      startTime: Date.now(),
      mistakes: []
    });
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
    const totalSeconds = Math.floor(seconds);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
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
    <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-8 lg:py-20 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 sm:mb-20"
      >
        <h1 className="text-4xl sm:text-7xl lg:text-9xl font-black text-white mb-5 lg:mb-10 tracking-tighter italic leading-none">
          经济法<span className="text-amber-500 not-italic">.</span>题库
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-4 sm:w-12 bg-zinc-800" />
          <p className="text-zinc-500 text-[8px] sm:text-xs uppercase tracking-[0.4em] font-bold">
             精选题目 · 助力专业复习
          </p>
          <div className="h-px w-4 sm:w-12 bg-zinc-800" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full max-w-6xl pb-10">
        {[
          { id: 'practice', title: '随机刷题', icon: BookOpen, color: 'text-amber-500', desc: '题库随机练习，支持即时解析' },
          { id: 'exam', title: '模拟考试', icon: GraduationCap, color: 'text-emerald-500', desc: '随机50题，30分钟限时挑战考试' },
          { id: 'errors', title: '错题本', icon: ClipboardList, color: 'text-rose-500', desc: `精选错题集中温习 (${errorIds.length} 道)` }
        ].map((mode, index) => (
          <motion.button
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigateTo(mode.id as any)}
            className="flex flex-col items-start p-7 sm:p-10 bg-zinc-900/40 rounded-3xl border border-zinc-800/60 hover:border-amber-500/50 transition-all group text-left relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <mode.icon size={120} />
            </div>
            <div className={`p-4 rounded-2xl bg-zinc-800/80 ${mode.color} mb-8 sm:mb-10 group-hover:bg-amber-500 group-hover:text-black transition-all shadow-lg`}>
              <mode.icon size={28} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight">{mode.title}</h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-8">{mode.desc}</p>
            <div className="mt-auto flex items-center gap-2 text-amber-500 font-black text-[10px] sm:text-xs uppercase tracking-widest">
              进入模式 <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

            <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif text-white leading-relaxed mb-8 lg:mb-12">
              <span className="text-amber-500 mr-2 sm:mr-4">{state.questions.findIndex(question => question.id === q.id) + 1}.</span>
              {q.title}
            </h2>

                  <div key={q.id} className="space-y-3 lg:space-y-4">
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
                    disabled={isAnswered}
                    onClick={() => handleAnswerChange(letter)}
                    className={`w-full group flex items-center text-left p-4 sm:p-5 rounded-xl border transition-all ${borderStyle} relative`}
                  >
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded border flex items-center justify-center mr-3 sm:mr-4 font-mono text-sm sm:text-base transition-all shrink-0 ${circleStyle} group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500`}>
                      {letter}
                    </span>
                    <span className={`text-xs sm:text-sm lg:text-base text-zinc-300 transition-colors ${isSelected ? 'text-white font-medium' : ''}`}>{optText}</span>
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
                        disabled={isAnswered}
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
                      key={q.id}
                      type="text"
                      disabled={isAnswered}
                      placeholder="在此处输入您的答案..."
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAnswerChange((e.target as HTMLInputElement).value.trim());
                      }}
                      className={`flex-1 p-3.5 sm:p-5 text-sm sm:text-base rounded-xl border bg-zinc-900 text-white outline-none transition-all ${isAnswered ? (isCorrect ? 'border-emerald-500' : 'border-rose-500') : 'border-zinc-800 focus:border-amber-500'}`}
                    />
                    {!isAnswered && (
                       <button 
                        onClick={() => {
                            const input = document.querySelector('input') as HTMLInputElement;
                            if (input) handleAnswerChange(input.value.trim());
                        }}
                        className="px-5 sm:px-8 bg-amber-500 text-black rounded-xl font-bold text-sm sm:text-base hover:bg-amber-600 transition-colors"
                       >
                         提交
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
                    {quizState && quizState.currentQuestionIndex === quizState.questions.length - 1 && view === 'exam' ? '提交并查看成绩' : '下一题'} <ChevronRight size={18} />
                  </button>
                </div>
             </motion.section>
          )}
        </AnimatePresence>


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
              { id: 'practice', title: '随机刷题', icon: BookOpen },
              { id: 'exam', title: '模拟考试', icon: GraduationCap },
              { id: 'errors', title: '错题本', icon: ClipboardList },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => navigateTo(btn.id as any)}
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

          <div className="mt-12">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-6 px-5">选择题型</h3>
            <div className="space-y-2 px-2">
              {[
                { type: QuestionType.MULTIPLE_CHOICE, label: '单选题' },
                { type: QuestionType.FILL_IN, label: '填空题' },
                { type: QuestionType.TRUE_FALSE, label: '判断题' }
              ].map((item) => {
                const isActive = selectedTypes.includes(item.type);
                return (
                  <button
                    key={item.type}
                    onClick={() => toggleType(item.type)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all border ${isActive ? 'bg-amber-500/5 border-amber-500/20 text-white' : 'bg-transparent border-transparent text-zinc-600 hover:text-zinc-400'}`}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isActive ? 'bg-amber-500 border-amber-500' : 'border-zinc-800'}`}>
                      {isActive && <CheckCircle2 size={10} className="text-black stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="px-5 mt-4 text-[10px] text-zinc-600 leading-relaxed italic">
              控制刷题及模拟考试中所包含的题目类型
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden h-14 border-b border-zinc-800 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center px-4 shrink-0">
        <div className="flex items-center gap-2" onClick={() => setView('home')}>
          <div className="w-7 h-7 bg-amber-500 rounded flex items-center justify-center text-black shadow-lg shadow-amber-500/10">
            <GraduationCap size={16} />
          </div>
          <span className="font-black text-sm tracking-tight text-white italic">经济法题库</span>
        </div>
      </header>

      {/* Main Content */}
      {/* Mobile Navigation (lg:hidden) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#09090b]/90 backdrop-blur-xl border-t border-zinc-800/50 px-2 sm:px-6 py-3.5 flex items-center justify-around shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
        {[
          { id: 'home', icon: LayoutGrid, label: '首页' },
          { id: 'practice', icon: BookOpen, label: '刷题' },
          { id: 'exam', icon: GraduationCap, label: '考试' },
          { id: 'errors', icon: ClipboardList, label: '错题' },
          { id: 'settings', icon: Menu, label: '设置' }
        ].map((item) => {
          const isActive = (view === item.id || (item.id === 'settings' && isMobileMenuOpen));
          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'settings') {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                } else {
                  navigateTo(item.id as any);
                }
              }}
              className={`flex flex-col items-center gap-1.5 transition-all duration-300 relative ${
                isActive ? 'text-amber-500 scale-110' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <item.icon size={18} className={isActive ? 'drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]' : ''} />
              <span className={`text-[9px] font-bold tracking-tight ${isActive ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
              {item.id === 'errors' && errorIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 text-[8px] font-black text-white flex items-center justify-center rounded-full ring-2 ring-[#09090b] animate-pulse">
                  {errorIds.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Settings Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-end"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              className="w-full bg-[#09090b] border-t border-zinc-800 rounded-t-3xl p-6 pb-24"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-8" />
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">题型偏好设置</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { type: QuestionType.MULTIPLE_CHOICE, label: '单项选择题' },
                  { type: QuestionType.FILL_IN, label: '填空题' },
                  { type: QuestionType.TRUE_FALSE, label: '判断题' }
                ].map((item) => {
                  const isActive = selectedTypes.includes(item.type);
                  return (
                    <button
                      key={item.type}
                      onClick={() => toggleType(item.type)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${
                        isActive ? 'bg-amber-500/10 border-amber-500/30 text-white' : 'bg-zinc-900/50 border-zinc-800/50 text-zinc-500'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isActive ? 'bg-amber-500 border-amber-500' : 'border-zinc-700'}`}>
                        {isActive && <CheckCircle2 size={12} className="text-black stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full mt-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-2xl transition-colors"
              >
                完成设置
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col relative overflow-hidden pb-20 lg:pb-0">
        {view !== 'home' && (
            <header className="h-16 lg:h-20 border-b border-zinc-800 px-4 lg:px-12 flex items-center justify-between bg-[#09090b]/80 backdrop-blur-md z-30 shrink-0">
                <div className="flex items-center gap-3 lg:gap-6">
                    <span className="text-[10px] lg:text-sm text-zinc-500 font-bold uppercase tracking-widest truncate max-w-[80px] lg:max-w-none">
                       {view === 'practice' ? '练习' : view === 'exam' ? '模拟' : '错题'}
                    </span>
                    {quizState && quizState.questions && !quizState.isFinished && (
                        <>
                            <span className="w-px h-6 bg-zinc-800 hidden sm:inline"></span>
                            <div className="flex items-center gap-2 lg:gap-6 shrink-0">
                                <div className="flex flex-col gap-1.5 justify-center min-w-[70px] lg:min-w-[150px]">
                                    <div className="flex items-center justify-between lg:justify-end gap-2">
                                         <span className="text-[9px] text-zinc-600 font-mono font-bold xs:hidden">
                                           {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                                         </span>
                                         <span className="text-[10px] text-amber-500 font-mono font-bold leading-none">
                                            {quizState.questions.length > 0 ? Math.round(((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100) : 0}%
                                         </span>
                                    </div>
                                    <div className="w-full h-1 lg:h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${quizState.questions.length > 0 ? ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100 : 0}%` }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                                <span className="text-[10px] lg:text-sm text-zinc-400 font-mono font-medium hidden xs:inline whitespace-nowrap">
                                    <span className="text-zinc-100">{quizState.currentQuestionIndex + 1}</span> <span className="text-zinc-700 mx-0.5">/</span> {quizState.questions.length}
                                </span>
                            </div>
                        </>
                    )}
                </div>
                
                <div className="flex items-center gap-3 lg:gap-8">
                    {view === 'exam' && quizState && quizState.questions && !quizState.isFinished && (
                         <>
                            <div className="flex items-center gap-1.5 font-mono text-zinc-500 mr-1 lg:mr-2">
                                <span className="text-[9px] lg:text-xs uppercase tracking-wider hidden xs:inline">得分:</span>
                                <span className="text-amber-500 font-bold text-xs lg:text-base">{Object.entries(quizState.userAnswers).reduce((acc, [qid, ans]) => {
                                    const q = quizState.questions.find(item => item.id === Number(qid));
                                    if (q?.type === QuestionType.MULTIPLE_CHOICE) return q.answer === ans ? acc + 2 : acc;
                                    return q?.answer === ans ? acc + 2 : acc;
                                }, 0)}</span>
                            </div>
                            <div className={`flex items-center gap-2 font-mono font-bold px-3 py-1 lg:py-1.5 rounded border ${timeRemaining < 300 ? 'bg-rose-500/10 border-rose-500/30 text-rose-500 animate-pulse' : 'bg-amber-500/5 border-amber-500/20 text-amber-500'}`}>
                                <Clock size={12} className="lg:size-[14px]" />
                                <span className="text-xs lg:text-base">{formatTime(timeRemaining)}</span>
                            </div>
                         </>
                    )}
                    <button 
                        onClick={() => {
                          setView('home');
                          setQuizState(null);
                        }}
                        className="p-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <Home size={18} className="lg:size-5" />
                    </button>
                </div>
            </header>
        )}

        <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={view + (quizState?.isFinished ? '_finished' : '_running') + (quizState ? '_hasState' : '_noState')}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                >
                    {view === 'home' ? (
                      renderHome()
                    ) : quizState && quizState.questions ? (
                      quizState.isFinished ? renderResult() : renderQuestion(quizState.questions[quizState.currentQuestionIndex], quizState)
                    ) : (
                      <div className="flex-1 h-full flex flex-col items-center justify-center p-12 text-center">
                        <div className="w-12 h-12 border-4 border-zinc-800 border-t-amber-500 rounded-full animate-spin mb-4" />
                        <p className="text-zinc-500 text-sm font-medium tracking-widest">正在初始化题库...</p>
                      </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

