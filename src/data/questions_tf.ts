import { Question, QuestionType } from '../types';

export const TF_QUESTIONS: Question[] = [
  {
    id: 1, type: QuestionType.TRUE_FALSE,
    title: "法的本质是由统治阶级的意志体现的。",
    answer: "√",
    explanation: "法的本质是反映统治阶级的国家意志，并且用于维护统治阶级的利益。",
    source: "第 2 页"
  },
  {
    id: 2, type: QuestionType.TRUE_FALSE,
    title: "法的特征包括个人自由性、国家强制性和规范性。",
    answer: "×",
    explanation: "法的特征 include 国家强制性、国家意志性和规范性，而不包括个人自由性。",
    source: "第 3 页"
  },
  {
    id: 3, type: QuestionType.TRUE_FALSE,
    title: "法律效力的冲突时，根本法优于普通法。",
    answer: "√",
    explanation: "法律冲突处理原则中，根本法（如宪法）优于普通法（如地方法规、行政法规）。",
    source: "第 7 页"
  },
  {
    id: 4, type: QuestionType.TRUE_FALSE,
    title: "法的效力范围仅限于本国领土，除非涉及国际条约。",
    answer: "√",
    explanation: "法律效力通常局限于本国领土，但国际条约和跨国法律在某些情况下可能会影响法律效力的范围。",
    source: "第 7 页"
  },
  {
    id: 5, type: QuestionType.TRUE_FALSE,
    title: "法的渊源仅限于宪法和法律。",
    answer: "×",
    explanation: "法的渊源包括宪法、法律、行政法规、地方性法规等，法院的判决书通常并非法律渊源。",
    source: "第 6 页"
  },
  {
    id: 6, type: QuestionType.TRUE_FALSE,
    title: "法律行为需要当事人之间的意志表示一致。",
    answer: "√",
    explanation: "法律行为的核心特征是意思表示的一致性，这决定了法律关系变动的效力。",
    source: "第 9 页"
  },
  {
    id: 7, type: QuestionType.TRUE_FALSE,
    title: "在法的效力冲突中，新法优于旧法是法律的一条基本原则。",
    answer: "√",
    explanation: "新法优于旧法是基于法律适时的原则，旨在解决法律更迭带来的冲突。",
    source: "第 7 页"
  },
  {
    id: 8, type: QuestionType.TRUE_FALSE,
    title: "法人的责任由股东承担，法人不需要承担独立责任。",
    answer: "×",
    explanation: "法人拥有独立的财产，能够以其全部财产独立承担民事责任。",
    source: "第 11 页"
  },
  {
    id: 9, type: QuestionType.TRUE_FALSE,
    title: "法人解散后，即使没有清算，其法律主体地位也立即消失。",
    answer: "×",
    explanation: "法人解散后必须经过清算程序并完成注销登记，法律主体地位才正式消失。",
    source: "第 29 页"
  },
  {
    id: 10, type: QuestionType.TRUE_FALSE,
    title: "法定代表人执行职务时产生的法律责任由法人承担。",
    answer: "√",
    explanation: "法定代表人以法人名义从事的职务行为，法律后果由法人承受。",
    source: "第 11 页"
  },
  {
    id: 11, type: QuestionType.TRUE_FALSE,
    title: "法律行为的成立必须以产生法律后果为目的。",
    answer: "√",
    explanation: "法律行为是有目的的行为，其目的在于引起法律关系的产生、变更或消灭。",
    source: "第 9 页"
  },
  {
    id: 12, type: QuestionType.TRUE_FALSE,
    title: "所有的企业法人、事业法人、社会团体法人自成立之日起均具有民事行为能力。",
    answer: "√",
    explanation: "法人的权利能力和行为能力是同时产生并同时消灭的。",
    source: "第 11 页"
  },
  {
    id: 13, type: QuestionType.TRUE_FALSE,
    title: "口头形式的意志表示不属于法律行为。",
    answer: "×",
    explanation: "法律行为可以采用书面、口头或其他形式，除非法律规定必须采用特定形式。",
    source: "第 9 页"
  },
  {
    id: 14, type: QuestionType.TRUE_FALSE,
    title: "法律行为的主要特征之一是具有社会意义。",
    answer: "√",
    explanation: "法律行为受到法律的调整，并对社会关系产生影响。",
    source: "第 9 页"
  },
  {
    id: 15, type: QuestionType.TRUE_FALSE,
    title: "法定代表人行为导致的侵权责任只能由其个人承担。",
    answer: "×",
    explanation: "法定代表人因执行职务造成他人损害的，由法人承担民事责任。",
    source: "第 11 页"
  },
  {
    id: 16, type: QuestionType.TRUE_FALSE,
    title: "法人的债务在法人解散后应由其股东按出资比例清偿。",
    answer: "×",
    explanation: "法人债务应由法人财产清偿。仅在股东未尽出资义务或存在特定违法情形时方承担责任。",
    source: "第 29 页"
  },
  {
    id: 17, type: QuestionType.TRUE_FALSE,
    title: "法人合并后，原法人的权利和义务将由合并后的法人承担。",
    answer: "√",
    explanation: "这是概括继承原则，保证了债权债务的连续性。",
    source: "第 29 页"
  },
  {
    id: 18, type: QuestionType.TRUE_FALSE,
    title: "非法人组织不具有法人资格，但可以以自己的名义从事民事活动。",
    answer: "√",
    explanation: "虽然不具备法人条件，但法律赋予了非法人组织一定的主体地位。",
    source: "第 13 页"
  },
  {
    id: 19, type: QuestionType.TRUE_FALSE,
    title: "法律责任中的刑事责任仅包括有期徒刑。",
    answer: "×",
    explanation: "刑事责任包括管制、拘役、有期徒刑、无期徒刑、死刑五种主刑及附加刑。",
    source: "第 21 页"
  },
  {
    id: 20, type: QuestionType.TRUE_FALSE,
    title: "法人在注销登记前，其法律主体资格一直存在。",
    answer: "√",
    explanation: "注销登记是法人在法律上终结的法定标志。",
    source: "第 29 页"
  },
  {
    id: 21, type: QuestionType.TRUE_FALSE,
    title: "所有的法律行为都必须是双方的行为。",
    answer: "×",
    explanation: "法律行为包括单方法律行为（如立遗嘱）和双方法律行为（如签订合同）。",
    source: "第 9 页"
  },
  {
    id: 22, type: QuestionType.TRUE_FALSE,
    title: "限制民事行为能力的未成年人实施的与其智力相适应的民事法律行为有效。",
    answer: "√",
    explanation: "民法典规定了限制民事行为能力人的行为效力范围。",
    source: "第 17 页"
  },
  {
    id: 23, type: QuestionType.TRUE_FALSE,
    title: "清算期间，法人可以为了获取利润而继续开展新业务。",
    answer: "×",
    explanation: "清算期间法人的活动被限制在清算目的范围内。",
    source: "第 29 页"
  },
  {
    id: 24, type: QuestionType.TRUE_FALSE,
    title: "法定代表人超越权限订立的合同，该代表行为无效。",
    answer: "×",
    explanation: "除非相对人知道或应当知道其超越权限，否则该代表行为有效。",
    source: "第 11 页"
  },
  {
    id: 25, type: QuestionType.TRUE_FALSE,
    title: "自然人从出生时起到死亡时止，具有民事权利能力。",
    answer: "√",
    explanation: "权利能力始于出生，终于死亡，具有普遍性。",
    source: "第 17 页"
  },
  {
    id: 26, type: QuestionType.TRUE_FALSE,
    title: "法律责任中，民事责任具有补偿性和惩罚性并存的特点，但核心在于补偿。",
    answer: "√",
    explanation: "民事责任主要用于填补受害人的损失，恢复原状。",
    source: "第 19 页"
  },
  {
    id: 27, type: QuestionType.TRUE_FALSE,
    title: "法定代表人执行职务的法律后果由法人承担，但法定代表人个人绝不承担过失责任。",
    answer: "×",
    explanation: "法人承担责任后，可以依照法律或章程规定追究有过错的法定代表人的责任。",
    source: "第 11 页"
  },
  {
    id: 28, type: QuestionType.TRUE_FALSE,
    title: "法人的行为能力是由法人的机关及其工作人员实现的。",
    answer: "√",
    explanation: "法人本身是抽象的组织，其行为通过其构成人员实现。",
    source: "第 9 页"
  },
  {
    id: 29, type: QuestionType.TRUE_FALSE,
    title: "死刑缓期执行满两年，如果没有故意犯罪，可以减为无期徒刑。",
    answer: "√",
    explanation: "这是死缓制度的具体规定，体现了少杀、慎杀的政策。",
    source: "第 21 页"
  },
  {
    id: 30, type: QuestionType.TRUE_FALSE,
    title: "书面形式的法律行为主要包括合同书、信件、数据电文等。",
    answer: "√",
    explanation: "随着技术发展，电子数据也纳入了书面形式的范畴。",
    source: "第 9 页"
  },
  {
    id: 31, type: QuestionType.TRUE_FALSE,
    title: "法律责任的主要目的是为了惩罚违法者，而非预防违法。",
    answer: "×",
    explanation: "法律责任的功能不仅包括惩罚，还包括救济、预防和教育。",
    source: "第 19 页"
  },
  {
    id: 32, type: QuestionType.TRUE_FALSE,
    title: "法人清算组在清算期间不得清偿债务。",
    answer: "×",
    explanation: "清算的主要工作之一就是清理并清偿债务。",
    source: "第 29 页"
  },
  {
    id: 33, type: QuestionType.TRUE_FALSE,
    title: "法律行为的本质是意志表示，这种意志必须是完全自愿的。",
    answer: "√",
    explanation: "受胁迫或重大误解的意志表示，会影响法律行为的效力。",
    source: "第 9 页"
  },
  {
    id: 34, type: QuestionType.TRUE_FALSE,
    title: "法人的责任能力仅限于其独立拥有的资产范围。",
    answer: "√",
    explanation: "法人以其全部财产对债务承担责任，这就是有限责任在组织层面的体现。",
    source: "第 11 页"
  },
  {
    id: 35, type: QuestionType.TRUE_FALSE,
    title: "法人合并后，债权债务关系自动由存续或新设法人继承，无需通知债权人。",
    answer: "×",
    explanation: "法人合并应当编制资产负债表及财产清单，并通知债权人。",
    source: "第 29 页"
  },
  {
    id: 36, type: QuestionType.TRUE_FALSE,
    title: "法律责任的种类包括刑事责任、民事责任、行政责任和违宪责任。",
    answer: "√",
    explanation: "这是法律责任在现代法理学中的基本分类。",
    source: "第 19 页"
  },
  {
    id: 37, type: QuestionType.TRUE_FALSE,
    title: "法定代表人姓名登记在法人身份证件中，不产生对外公示效力。",
    answer: "×",
    explanation: "营业执照上的法定代表人姓名具有公示公信力。",
    source: "第 11 页"
  },
  {
    id: 38, type: QuestionType.TRUE_FALSE,
    title: "刑事附加刑包括罚金、剥夺政治权利、没收财产和驱逐出境。",
    answer: "√",
    explanation: "附加刑可以与主刑并用，也可以独立适用。",
    source: "第 19 页"
  },
  {
    id: 39, type: QuestionType.TRUE_FALSE,
    title: "法人解散后，应由其资产直接抵偿，不需要经过任何法定清算步骤。",
    answer: "×",
    explanation: "为了保护债权人利益，法律规定了严谨的清算步骤。",
    source: "第 29 页"
  },
  {
    id: 40, type: QuestionType.TRUE_FALSE,
    title: "法人的权利能力和行为能力在法人注销登记时同时消灭。",
    answer: "√",
    explanation: "注销意味着法律人格的消解。",
    source: "第 11 页"
  },
  {
    id: 41, type: QuestionType.TRUE_FALSE,
    title: "法律事实中的法律事件包括绝对事件和相对事件。",
    answer: "√",
    explanation: "绝对事件如自然灾害，相对事件如人的出生、死亡。",
    source: "第 8 页"
  },
  {
    id: 42, type: QuestionType.TRUE_FALSE,
    title: "法人的法定代表人由法人章程或者法律规定产生。",
    answer: "√",
    explanation: "法定代表人的产生程序受法律和章程约束。",
    source: "第 11 页"
  },
  {
    id: 43, type: QuestionType.TRUE_FALSE,
    title: "主刑只能独立适用，不能并用。",
    answer: "√",
    explanation: "刑事主刑是主要的惩罚方式，具有排他性，一个罪名只能判一个主刑。",
    source: "第 19 页"
  },
  {
    id: 44, type: QuestionType.TRUE_FALSE,
    title: "民事责任中的赔偿损失应当以受害者遭受的实际损失为限。",
    answer: "√",
    explanation: "这是填平原则，即赔偿与损失相当。",
    source: "第 19 页"
  },
  {
    id: 45, type: QuestionType.TRUE_FALSE,
    title: "法人分立后，原法人的债务由分立后的法人承担按份责任。",
    answer: "×",
    explanation: "通常由分立后的法人承担连带责任，除非债权人另有明确书面约定。",
    source: "第 29 页"
  },
  {
    id: 46, type: QuestionType.TRUE_FALSE,
    title: "法的适用效力中，特别法优于一般法。",
    answer: "√",
    explanation: "在相同层级法律中，优先适用特别规定。",
    source: "第 15 页"
  },
  {
    id: 47, type: QuestionType.TRUE_FALSE,
    title: "没收财产是将犯罪分子所有的全部财产没收。",
    answer: "×",
    explanation: "没收财产是没收犯罪分子个人所有的合法财产中的一部分或者全部。",
    source: "第 21 页"
  },
  {
    id: 48, type: QuestionType.TRUE_FALSE,
    title: "非法人组织的出资人对非法人组织的债务承担无限连带责任。",
    answer: "√",
    explanation: "这是非法人组织与法人的最大区别。",
    source: "第 13 页"
  },
  {
    id: 49, type: QuestionType.TRUE_FALSE,
    title: "法人的分立分为派生分立和新设分立两种情况。",
    answer: "√",
    explanation: "分立会导致原有主体的注销或变更。",
    source: "第 29 页"
  },
  {
    id: 50, type: QuestionType.TRUE_FALSE,
    title: "无民事行为能力人的民事法律行为由其法定代理人代理实施。",
    answer: "√",
    explanation: "为了保护其利益，法律规定由他人代为行使权利。",
    source: "第 17 页"
  }
];
