import { Question, QuestionType } from '../types';

export const CHOICE_QUESTIONS: Question[] = [
  {
    id: 1, type: QuestionType.MULTIPLE_CHOICE,
    title: "法的本质是由哪个群体的意志体现的？",
    options: ["A. 统治阶级", "B. 被统治阶级", "C. 全社会成员", "D. 法律专家"],
    answer: "A", 
    explanation: "法的本质是统治阶级的国家意志的体现。法不仅仅反映全社会成员的意志，而是反映了由统治阶级制定的意志，这通常是为了维护统治阶级的利益。",
    source: "第2页"
  },
  {
    id: 2, type: QuestionType.MULTIPLE_CHOICE,
    title: "法的特征不包括下列哪个选项？",
    options: ["A. 国家强制性", "B. 国家意志性", "C. 个人自由性", "D. 规范性"],
    answer: "C", 
    explanation: "法的特征 include 国家强制性、国家意志性和规范性。法的目的是规范社会行为并确保其遵守，通过国家强制力确保法令的执行，而不包括“个人自由性”。",
    source: "第3页"
  },
  {
    id: 3, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下关于法的分类的表述，哪项是正确的？",
    options: ["A. 法可根据内容和效力分为根本法 and 普通法", "B. 法仅根据创制程序划分", "C. 法s的分类仅限于成文法和不成文法", "D. 法律根据时间效力划分为法律行为和法律事件"],
    answer: "A", 
    explanation: "法的分类可以根据内容和效力划分为根本法和普通法。这种分类方式体现了法律体系的层次性，根本法（如宪法）通常具有比普通法更高的效力。",
    source: "第4页"
  },
  {
    id: 4, type: QuestionType.MULTIPLE_CHOICE,
    title: "法的效力等级，正确的排序是？",
    options: ["A. 宪法 > 法律 > 行政法规 > 地方性法规 > 本级和下级地方政府规章", "B. 法律 > 宪法 > 行政法规 > 地方性法规", "C. 行政法规 > 宪法 > 法律 > 地方性法规", "D. 行政法规 > 法律 > 宪法 > 地方性法规"],
    answer: "A", 
    explanation: "法的效力等级按照从高到低的顺序是：宪法 > 法律 > 行政法规 > 地方性法规 > 本级和下级地方政府规章。宪法具有最高效力。",
    source: "第5页"
  },
  {
    id: 5, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法的渊源，哪项描述是正确的？",
    options: ["A. 判决书属于法的渊源", "B. 宪法属于法的渊源", "C. 法院判决书可以作为立法参考", "D. 行政指令属于法的渊源"],
    answer: "B", 
    explanation: "法的渊源包括宪法、法律、行政法规、地方性法规等，但法院的判决书并不属于法的正式渊源。判决书具有案例性质，不能作为普遍适用的规范。",
    source: "第6页"
  },
  {
    id: 6, type: QuestionType.MULTIPLE_CHOICE,
    title: "依据法的效力冲突处理原则，哪项排序是正确的？",
    options: ["A. 新法优于旧法", "B. 特别法优于一般法", "C. 上位法优于下位法", "D. 以上所有"],
    answer: "D", 
    explanation: "法的效力冲突处理原则包括新法优于旧法、特别法优于一般法、上位法优于下位法等。在实际法律适用中，这些原则有助于解决冲突。",
    source: "第7页"
  },
  {
    id: 7, type: QuestionType.MULTIPLE_CHOICE,
    title: "法律的效力范围，下面哪项描述是正确的？",
    options: ["A. 法律的效力不受地域限制", "B. 法律效力仅限于本国领土", "C. 法律对境外公民无效", "D. 法律效力仅局限于首都"],
    answer: "B", 
    explanation: "法律的效力通常局限于本国领土，即具有空间效力。尽管某些国际法在特定情况下产生影响，但大部分法律只适用于本国。",
    source: "第7页"
  },
  {
    id: 8, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法律事实的描述，哪项 is 正确的？",
    options: ["A. 法律事件不受人的意志影响", "B. 法律行为完全不涉及社会现象", "C. 法律事实是法律关系发生的间接原因", "D. 法律事实不涉及自然灾害"],
    answer: "A", 
    explanation: "法律事件是指不以人的意志为转移的事件，如自然灾害、意外事故等，它们是法律事实的一部分，并直接影响法律关系的发生、变更或消灭。",
    source: "第8页"
  },
  {
    id: 9, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列选项中，属于法律行为的有：",
    options: ["A. 签订合同", "B. 天气变化", "C. 法院的裁定", "D. 社会运动"],
    answer: "A", 
    explanation: "法律行为是指当事人根据意志表示所做的行为，并产生法律后果。签订合同是一种典型的法律行为，涉及双方明确的意图和义务。",
    source: "第9页"
  },
  {
    id: 10, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下哪项是法的效力处理原则之一？",
    options: ["A. 法律优先原则", "B. 法律的空间效力", "C. 上位法优于下位法", "D. 所有法律必须遵守相同效力"],
    answer: "C", 
    explanation: "上位法优于下位法是法的效力冲突处理的基本原则之一。这意味着不同等级法律发生冲突时，遵循高位法优先原则。",
    source: "第10页"
  },
  {
    id: 11, type: QuestionType.MULTIPLE_CHOICE,
    title: "关于法人，以下哪项描述是正确的？",
    options: ["A. 法人可以承受民事责任", "B. 法人不具有独立的民事行为能力", "C. 法人不能参与合同签订", "D. 法人不可以合并"],
    answer: "A", 
    explanation: "法人具有独立的民事行为能力，能够以自己的名义从事民事活动，包括签订合同和承担相应的民事责任。",
    source: "第11页"
  },
  {
    id: 12, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法人的终止，哪项是正确的？",
    options: ["A. 法人因破产而终止", "B. 法人解散后不再承担任何责任", "C. 法人的终止不涉及清算过程", "D. 法人终止后，债务由所有出资人承担"],
    answer: "A", 
    explanation: "法人通常在破产或其他法定原因下终止。在终止过程中，法人将通过清算清理其债务。",
    source: "第12页"
  },
  {
    id: 13, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于非法人组织的描述，哪项是正确的？",
    options: ["A. 非法人组织具有法人资格", "B. 非法人组织的财产无法清偿债务时，出资人承担有限责任", "C. 合伙企业属于非法人组织", "D. 非法人组织不参与民事活动"],
    answer: "C", 
    explanation: "合伙企业是非法人组织，虽然不具备法人资格，但仍可以进行民事活动并承担责任。",
    source: "第13页"
  },
  {
    id: 14, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下哪项是刑事责任的主刑？",
    options: ["A. 拘役", "B. 罚款", "C. 剥夺政治权利", "D. 管制"],
    answer: "A", 
    explanation: "刑事责任的主刑包括拘役、有期徒刑、无期徒刑、死刑等，其中拘役是主刑的一种。",
    source: "第20页"
  },
  {
    id: 15, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下关于刑事责任的描述，哪项是正确的？",
    options: ["A. 所有犯罪都不适用减轻处罚", "B. 刑事责任的主刑仅包括拘役", "C. 被判处死刑的罪犯可缓期执行", "D. 附加刑与主刑不能同时适用"],
    answer: "C", 
    explanation: "被判处死刑的罪犯可缓期执行，尤其是针对罪行极其严重的犯罪。",
    source: "第21页"
  },
  {
    id: 16, type: QuestionType.MULTIPLE_CHOICE,
    title: "下面关于自然人民事行为能力的描述，哪项是正确的？",
    options: ["A. 自然人自出生时起即具备民事行为能力", "B. 限制民事行为能力人可以完全独立实施所有民事行为", "C. 16岁以上的未成年人可以独立实施与其年龄、智力相适应的行为", "D. 无民事行为能力人可以独立承担所有行为"],
    answer: "C", 
    explanation: "16岁以上的未成年人在某些条件下（如以自己的劳动收入为主要生活来源）可以视为完全民事行为能力人，或独立实施与其智力相适应的行为。",
    source: "第17页"
  },
  {
    id: 17, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于刑事责任的主刑和附加刑，哪项是正确的？",
    options: ["A. 主刑包括罚款，附加刑包括管制", "B. 主刑不包括有期徒刑", "C. 附加刑可以独立适用", "D. 主刑和附加刑的执行顺序无关"],
    answer: "C", 
    explanation: "附加刑如罚金、剥夺政治权利、没收财产等可以与主刑一同适用，也可以独立适用。",
    source: "第21页"
  },
  {
    id: 18, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下关于法人代表责任的描述，哪项 is 正确的？",
    options: ["A. 法定代表人不需要为法人行为承担责任", "B. 法定代表人的行为如果涉及侵权，由法人承担全部责任", "C. 法定代表人执行职务造成损害，法人不承担责任", "D. 法定代表人可以将责任推给法人股东"],
    answer: "B", 
    explanation: "法定代表人在执行职务时如果发生侵权行为，通常由法人承担责任，除非有证据证明其有个人过失或恶意。",
    source: "第11页"
  },
  {
    id: 19, type: QuestionType.MULTIPLE_CHOICE,
    title: "法律行为中，以下哪项描述是正确的？",
    options: ["A. 所有法律行为都必须是有偿的", "B. 法律行为必须要有意图，并且会产生法律后果", "C. 法律行为只涉及合同行为", "D. 法律行为不受任何外部约束"],
    answer: "B", 
    explanation: "法律行为是有意图的行为，且该行为会产生明确的法律后果。例如签订合同就是一个典型的法律行为。",
    source: "第9页"
  },
  {
    id: 20, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列哪项属于法律行为？",
    options: ["A. 交通事故", "B. 签订合同", "C. 天气变化", "D. 自然灾害"],
    answer: "B", 
    explanation: "签订合同涉及当事人自愿的意志表示且产生法律后果。交通事故、天气和灾害不涉及法律行为。",
    source: "第9页"
  },
  {
    id: 21, type: QuestionType.MULTIPLE_CHOICE,
    title: "法的效力范围的空间效力中，以下哪项描述正确？",
    options: ["A. 法律的效力完全不受地域限制", "B. 法律效力仅限于本国领土", "C. 法律对所有国家的公民都适用", "D. 法律的效力可以跨越国界"],
    answer: "B", 
    explanation: "法律的空间效力通常局限于本国领土，法律效力对境外的公民没有普遍约束力。",
    source: "第15页"
  },
  {
    id: 22, type: QuestionType.MULTIPLE_CHOICE,
    title: "法律事实中的法律事件包括哪些内容？",
    options: ["A. 法律事件包括自然灾害和意外事故", "B. 法律事件只包括社会行为", "C. 法律事件仅限于自然现象", "D. 法律事件不涉及社会现象"],
    answer: "A", 
    explanation: "法律事件指的是不以人的意志为转移的事件，包括自然灾害、生老病死等与个人意志无关的情况。",
    source: "第8页"
  },
  {
    id: 23, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下选项中，不属于法的渊源的是？",
    options: ["A. 宪法", "B. 法律", "C. 判决书", "D. 行政指令"],
    answer: "C", 
    explanation: "判决书本身并不是法的渊源，虽然具有法律效力，但它不是法律制定的源头。",
    source: "第6页"
  },
  {
    id: 24, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下关于法律责任的描述，哪项是正确的？",
    options: ["A. 法律责任仅包括民事责任", "B. 行政责任不涉及处罚", "C. 刑事责任只包括监禁", "D. 法律责任可以分为行政责任、民事责任和刑事责任"],
    answer: "D", 
    explanation: "法律责任包括行政责任、民事责任和刑事责任。这三种责任是法律体系中常见的不同责任形式。",
    source: "第19页"
  },
  {
    id: 25, type: QuestionType.MULTIPLE_CHOICE,
    title: "法人分立后，如何处理其权利和义务？",
    options: ["A. 分立后的法人不需要承担任何义务", "B. 权利和义务由分立后的法人共同承担", "C. 原法人继续承担全部责任", "D. 分立后，权利和义务由新的法人承担"],
    answer: "B", 
    explanation: "法人分立后，原法人权利和义务通常会分配到分立后的法人中，涉及具体债务和责任的分配。",
    source: "第29页"
  },
  {
    id: 26, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于非法人组织的财产责任，哪项描述正确？",
    options: ["A. 非法人组织可以独立承担财产责任", "B. 非法人组织的债务由出资人或设立人承担", "C. 非法人组织的债务由法人承担", "D. 非法人组织无须对外承担任何财务责任"],
    answer: "B", 
    explanation: "非法人组织的财产不足以偿还债务时，出资人或设立人需要承担无限责任。",
    source: "第13页"
  },
  {
    id: 27, type: QuestionType.MULTIPLE_CHOICE,
    title: "法定代表人的行为如果导致侵权，责任应由谁承担？",
    options: ["A. 法定代表人个人承担责任", "B. 法定代表人和法人共同承担责任", "C. 法人承担全部责任", "D. 不需要承担任何责任"],
    answer: "C", 
    explanation: "法定代表人执行职务时发生的侵权行为，由法人承担责任，法人有责任对外承担民事责任。",
    source: "第11页"
  },
  {
    id: 28, type: QuestionType.MULTIPLE_CHOICE,
    title: "关于法律行为，以下哪项描述是正确的？",
    options: ["A. 法律行为不涉及当事人的意志表示", "B. 法律行为需要在特定场合下进行", "C. 法律行为会直接产生法律后果", "D. 法律行为无法影响其他法律关系"],
    answer: "C", 
    explanation: "法律行为涉及当事人的意志表示，并且会直接产生法律后果，如签订合同。",
    source: "第9页"
  },
  {
    id: 29, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法的渊源的说法，哪项正确？",
    options: ["A. 法s的渊源仅限于宪法", "B. 法s的渊源不包括地方性法规", "C. 法s的渊源包括行政法规、法律和宪法", "D. 法s的渊源仅限于国际法"],
    answer: "C", 
    explanation: "法的渊源包括宪法、法律、行政法规等，地方性法规也属于法的渊源的一部分。",
    source: "第6页"
  },
  {
    id: 30, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下关于法人终止的描述，哪项是正确的？",
    options: ["A. 法人解散后立即终止", "B. 法人解散后进入清算程序，清算结束后终止", "C. 法人终止后继续承担责任", "D. 法人终止后，无需进行任何程序"],
    answer: "B", 
    explanation: "法人解散后必须进入清算程序，清算结束后才会正式终止。",
    source: "第29页"
  },
  {
    id: 31, type: QuestionType.MULTIPLE_CHOICE,
    title: "关于自然人行为能力的表述，以下哪项正确？",
    options: ["A. 自然人自出生时起就具备完全行为能力", "B. 18岁以下的未成年人没有民事行为能力", "C. 限制民事行为能力人可以独立实施所有法律行为", "D. 16岁以上且有劳动收入的未成年人视为完全民事行为能力人"],
    answer: "D", 
    explanation: "16岁以上的未成年人，如果有独立劳动收入并以此为主要生活来源，可以视为完全民事行为能力人。",
    source: "第17页"
  },
  {
    id: 32, type: QuestionType.MULTIPLE_CHOICE,
    title: "法人是否有权从事民事活动？",
    options: ["A. 法人不能从事民事活动", "B. 法人可以独立从事民事活动", "C. 法人只能由股东执行民事活动", "D. 法人不承担民事责任"],
    answer: "B", 
    explanation: "法人具有独立的民事行为能力，能够从事与民事活动相关的各种事务。",
    source: "第11页"
  },
  {
    id: 33, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下关于法的效力冲突的处理原则，哪项是正确的？",
    options: ["A. 新法优于旧法", "B. 地方性法规优于国家法律", "C. 法律之间的冲突无解", "D. 行政法规不受宪法的限制"],
    answer: "A", 
    explanation: "法的效力冲突时，通常新法优于旧法，确保法律的更新和适用性。",
    source: "第15页"
  },
  {
    id: 34, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下哪些行为属于法律行为？",
    options: ["A. 签订协议", "B. 自然灾害", "C. 社会事件", "D. 自由表达意见"],
    answer: "A", 
    explanation: "签订协议是一个法律行为，它直接涉及双方意图并产生法律后果。",
    source: "第9页"
  },
  {
    id: 35, type: QuestionType.MULTIPLE_CHOICE,
    title: "法律责任中的刑事责任，以下哪项是正确的？",
    options: ["A. 仅仅限于监禁", "B. 可以通过罚款、拘留等形式执行", "C. 刑事责任只适用于法人", "D. 仅对自然人适用"],
    answer: "B", 
    explanation: "刑事责任包括多种形式，如罚款、拘留、有期徒刑等，视罪行严重程度而定。",
    source: "第21页"
  },
  {
    id: 36, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列哪项属于刑事责任的附加刑？",
    options: ["A. 管制", "B. 判处死刑", "C. 拘役", "D. 判处无期徒刑"],
    answer: "A", 
    explanation: "附加刑包括罚金、剥夺政治权利等，管制是附加刑之一。",
    source: "第21页"
  },
  {
    id: 37, type: QuestionType.MULTIPLE_CHOICE,
    title: "法律行为的主要特征是：",
    options: ["A. 必须是书面形式", "B. 需要双方意图一致", "C. 必须带有约束力", "D. 仅限于合同签订"],
    answer: "B", 
    explanation: "法律行为的特征之一是双方的意图一致，这样才会产生法律后果。",
    source: "第9页"
  },
  {
    id: 38, type: QuestionType.MULTIPLE_CHOICE,
    title: "法人清算的过程不包括以下哪项？",
    options: ["A. 清算期内不得进行与清算无关的活动", "B. 清算时需要处理法人所有的债务", "C. 清算期内法人继续从事新业务", "D. 清算结束时法人终止"],
    answer: "C", 
    explanation: "法人清算期间不得从事与清算无关的活动。",
    source: "第29页"
  },
  {
    id: 39, type: QuestionType.MULTIPLE_CHOICE,
    title: "法律责任不包括以下哪项？",
    options: ["A. 行政责任", "B. 民事责任", "C. 刑事责任", "D. 司法责任"],
    answer: "D", 
    explanation: "司法责任并不是法律责任的一部分，法律责任包括行政、民事和刑事责任。",
    source: "第19页"
  },
  {
    id: 40, type: QuestionType.MULTIPLE_CHOICE,
    title: "法的渊源包括哪些？",
    options: ["A. 法院判决", "B. 宪法和法律", "C. 法律行为", "D. 行政处分"],
    answer: "B", 
    explanation: "法的渊源包括宪法、法律、行政法规等。法院判决不属于法的渊源。",
    source: "第6页"
  },
  {
    id: 41, type: QuestionType.MULTIPLE_CHOICE,
    title: "法律行为的主要特征是什么？",
    options: ["A. 必须通过书面形式进行", "B. 需要当事人之间的意志表示一致", "C. 必须带有财产转移", "D. 必须受到政府批准"],
    answer: "B", 
    explanation: "法律行为的核心特征是当事人之间的意志表示一致，即双方自愿同意的行为才会产生法律后果。",
    source: "第9页"
  },
  {
    id: 42, type: QuestionType.MULTIPLE_CHOICE,
    title: "以下关于法定代表人的责任，哪项描述正确？",
    options: ["A. 法定代表人不承担民事责任", "B. 法定代表人因执行职务而导致的损害，由法人承担责任", "C. 法定代表人执行职务所产生的责任完全由自己承担", "D. 法定代表人行为无关紧要，不需要承担责任"],
    answer: "B", 
    explanation: "法定代表人在执行职务时产生的法律后果一般由法人承担，法人作为法律主体对外承担责任。",
    source: "第11页"
  },
  {
    id: 43, type: QuestionType.MULTIPLE_CHOICE,
    title: "法律责任中的民事责任，以下哪项是正确的？",
    options: ["A. 仅包括违约责任", "B. 包括停止侵害、返还财产等", "C. 仅适用于法人", "D. 仅适用于违反行政法规的行为"],
    answer: "B", 
    explanation: "民事责任 include 停止侵害、返还财产、赔偿损失等多种形式，目的是保护个体的合法权益。",
    source: "第19页"
  },
  {
    id: 44, type: QuestionType.MULTIPLE_CHOICE,
    title: "法人解散后的处理流程是什么？",
    options: ["A. 法人解散后，立即终止所有责任", "B. 法人解散后进入清算程序，清算结束后法人终止", "C. 法人解散后不需要进行清算", "D. 法人解散后继续开展所有业务，直至正式终止"],
    answer: "B", 
    explanation: "法人解散后，必须进入清算程序，清算结束后，法人才会正式终止。清算过程包括清偿债务和分配剩余资产。",
    source: "第29页"
  },
  {
    id: 45, type: QuestionType.MULTIPLE_CHOICE,
    title: "法的效力冲突时，以下哪项处理原则是正确的？",
    options: ["A. 新法优于旧法", "B. 上位法优于下位法", "C. 特别法优于一般法", "D. 以上都正确"],
    answer: "D", 
    explanation: "法的效力冲突时，通常采用新法优于旧法、上位法优于下位法、特别法优于一般法等处理原则。",
    source: "第15页"
  },
  {
    id: 46, type: QuestionType.MULTIPLE_CHOICE,
    title: "关于法人责任的描述，哪项是正确的？",
    options: ["A. 法人只能承担有限责任", "B. 法人不具有民事行为能力", "C. 法人不能承担刑事责任", "D. 法人可以承担民事责任和刑事责任"],
    answer: "D", 
    explanation: "法人作为法律主体，可以承担民事责任和刑事责任。",
    source: "第11页"
  },
  {
    id: 47, type: QuestionType.MULTIPLE_CHOICE,
    title: "法定代表人在职务行为中承担责任的方式是？",
    options: ["A. 仅由法人承担所有责任", "B. 法定代表人个人承担责任", "C. 法定代表人和法人共同承担责任", "D. 法定代表人不承担责任"],
    answer: "A", 
    explanation: "法定代表人在执行职务时发生的侵权行为，一般由法人承担责任，法定代表人不直接承担责任。",
    source: "第11页"
  },
  {
    id: 48, type: QuestionType.MULTIPLE_CHOICE,
    title: "法人的责任在什么情况下可以由股东承担？",
    options: ["A. 法人破产时", "B. 法人没有参与任何违法行为时", "C. 法人只对外承担责任时", "D. 法人的债务完全由股东个人负责"],
    answer: "A", 
    explanation: "法人在破产时，股东可能需要承担一定责任，尤其是当法人资产不足以偿还债务时，股东可能会面临责任追偿。",
    source: "第11页"
  },
  {
    id: 49, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于非法人组织的描述，哪项是正确的？",
    options: ["A. 非法人组织具有独立的法人资格", "B. 非法人组织不能从事民事行为", "C. 非法人组织的债务由出资人或设立人承担", "D. 非法人组织的财产不用于清偿债务"],
    answer: "C", 
    explanation: "非法人组织的债务通常由出资人或设立人承担无限责任。",
    source: "第13页"
  },
  {
    id: 50, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法律事实的分类，哪项是正确的？",
    options: ["A. 法律事实分为法律行为和法律事件", "B. 法律事实仅包括人的意志行为", "C. 法律事实不包括自然灾害", "D. 法律事实仅指法院的判决"],
    answer: "A", 
    explanation: "法律事实是法律关系发生的客观情况，通常分为法律行为（有意志）和法律事件（无意志）。",
    source: "第8页"
  },
  {
    id: 51, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计法律制度是指（ ）。",
    options: ["A. 企业内部财务管理制度", "B. 国家权力机关和行政机关制定的有关会计工作的法律、法规、规章和规范性文件的总称", "C. 会计人员职业规范", "D. 税收法律制度"],
    answer: "B", 
    explanation: "会计法律制度是国家层面的规范体系，其制定主体包括国家权力机关（如人大）和行政机关（如财政部）。其内容涵盖法律、行政法规、部门规章及规范性文件，形成一个完整的制度体系。因此B是完整且准确的表述，其余选项要么范围过窄，要么性质不同。",
    source: "第1页"
  },
  {
    id: 52, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计法律制度调整的对象是（ ）。",
    options: ["A. 企业经营关系", "B. 会计关系", "C. 税收关系", "D. 民事关系"],
    answer: "B", 
    explanation: "会计法律制度专门用于调整在会计工作过程中形成的社会关系，即“会计关系”。企业经营关系属于经济管理范畴，税收关系由税法调整，民事关系由民法调整，因此只有B符合规定。",
    source: "第1页"
  }
];
