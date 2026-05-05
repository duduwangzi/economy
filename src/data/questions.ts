import { Question, QuestionType } from '../types';

export const QUESTIONS: Question[] = [
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
    explanation: "法的特征包括国家强制性、国家意志性和规范性。法的目的是规范社会行为并确保其遵守，通过国家强制力确保法令的执行，而不包括“个人自由性”。",
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
    title: "以下关于法人代表责任的描述，哪项是正确的？",
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
    options: ["A. 法s的渊源仅限于宪法", "B. 法的渊源不包括地方性法规", "C. 法的渊源包括行政法规、法律和宪法", "D. 法的渊源仅限于国际法"],
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
    explanation: "民事责任包括停止侵害、返还财产、赔偿损失等多种形式，目的是保护个体的合法权益。",
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
    title: "法律责任不包括哪些内容？",
    options: ["A. 行政责任", "B. 民事责任", "C. 刑事责任", "D. 司法责任"],
    answer: "D", 
    explanation: "司法责任通常指的是法院或司法人员在职责范围内的责任，而法律责任包括行政责任、民事责任和刑事责任。",
    source: "第19页"
  },
  // 填空题 51-100
  {
    id: 51, type: QuestionType.FILL_IN,
    title: "法的本质是由__________的国家意志体现的。",
    answer: "统治阶级",
    explanation: "法的本质是由统治阶级的国家意志体现，反映了社会中的统治阶级利益。",
    source: "第 2 页"
  },
  {
    id: 52, type: QuestionType.FILL_IN,
    title: "法的特征包括国家强制性、国家意志性和__________。",
    answer: "规范性",
    explanation: "法的特征包括国家强制性、国家意志性和规范性，意味着法是由国家规定的并且必须强制执行的行为规范。",
    source: "第 3 页"
  },
  {
    id: 53, type: QuestionType.FILL_IN,
    title: "法的效力冲突处理原则中，新法优于__________。",
    answer: "旧法",
    explanation: "法律效力冲突时，新法优于旧法是常见的原则，确保法律体系的现代化。",
    source: "第 7 页"
  },
  {
    id: 54, type: QuestionType.FILL_IN,
    title: "法律的效力范围通常局限于__________。",
    answer: "本国领土",
    explanation: "法律的效力大多局限于本国领土，只有特殊情况才会超越国界。",
    source: "第 7 页"
  },
  {
    id: 55, type: QuestionType.FILL_IN,
    title: "法的渊源包括宪法、法律、行政法规以及__________。",
    answer: "地方性法规",
    explanation: "法的渊源是指各种具有法律效力的规范性文件，地方性法规也是其一部分。",
    source: "第 6 页"
  },
  {
    id: 56, type: QuestionType.FILL_IN,
    title: "法律行为的主要特征是当事人之间__________的一致。",
    answer: "意志表示",
    explanation: "法律行为的关键特征是当事人自愿的意志表示一致，产生法律效力。",
    source: "第 9 页"
  },
  {
    id: 57, type: QuestionType.FILL_IN,
    title: "法的效力冲突时，上位法优于__________。",
    answer: "下位法",
    explanation: "法的效力冲突处理原则之一是上位法优于下位法，即高位法的规定优先于低位法的规定。",
    source: "第 15 页"
  },
  {
    id: 58, type: QuestionType.FILL_IN,
    title: "法人因__________而终止。",
    answer: "破产",
    explanation: "法人可能因破产等原因终止，经过清算程序后终结其法律主体资格。",
    source: "第 12 页"
  },
  {
    id: 59, type: QuestionType.FILL_IN,
    title: "法律的空间效力通常局限于__________。",
    answer: "本国领土",
    explanation: "法律的空间效力通常局限于本国领土，除非有国际条约或跨国协定。",
    source: "第 15 页"
  },
  {
    id: 60, type: QuestionType.FILL_IN,
    title: "法律责任中的__________包括停止侵害、返还财产等。",
    answer: "民事责任",
    explanation: "民事责任通常包括停止侵害、返还财产、赔偿损失等形式，旨在恢复受害者的权益。",
    source: "第 19 页"
  },
  {
    id: 61, type: QuestionType.FILL_IN,
    title: "法人行为后产生的法律后果由__________承担。",
    answer: "法人",
    explanation: "法人作为法律主体，通常承担由其行为产生的法律后果。",
    source: "第 11 页"
  },
  {
    id: 62, type: QuestionType.FILL_IN,
    title: "法人的责任可以由其__________承担。",
    answer: "法定代表人",
    explanation: "法定代表人在执行职务时，其行为产生的责任由法人承担。",
    source: "第 11 页"
  },
  {
    id: 63, type: QuestionType.FILL_IN,
    title: "法人解散后通常需要进行__________，清算完毕后法人终止。",
    answer: "清算",
    explanation: "法人解散后，必须经过清算程序，清算结束后法人终止。",
    source: "第 29 页"
  },
  {
    id: 64, type: QuestionType.FILL_IN,
    title: "法律行为必须涉及当事人之间的__________表示。",
    answer: "意志",
    explanation: "法律行为的本质是当事人之间自愿的意志表示，这些表示会产生法律后果。",
    source: "第 9 页"
  },
  {
    id: 65, type: QuestionType.FILL_IN,
    title: "法定代表人执行职务时造成的损害，由__________承担责任。",
    answer: "法人",
    explanation: "法定代表人在执行职务时造成的损害，通常由法人承担责任。",
    source: "第 11 页"
  },
  {
    id: 66, type: QuestionType.FILL_IN,
    title: "法律行为中，产生法律后果的行为称为__________。",
    answer: "法律行为",
    explanation: "法律行为是指具有明确法律后果的行为，如签订合同、立遗嘱等。",
    source: "第 9 页"
  },
  {
    id: 67, type: QuestionType.FILL_IN,
    title: "法人的债务不足以偿还时，__________需要承担责任。",
    answer: "股东",
    explanation: "在法人债务不足以清偿时，股东或出资人可能需要承担责任，尤其是非法人组织。",
    source: "第 13 页"
  },
  {
    id: 68, type: QuestionType.FILL_IN,
    title: "法定代表人在执行职务时产生的法律后果由__________承担。",
    answer: "法人",
    explanation: "法定代表人在履行职务时的行为产生的责任一般由法人承担。",
    source: "第 11 页"
  },
  {
    id: 69, type: QuestionType.FILL_IN,
    title: "法律行为通常需要明确的__________表示，才能产生效力。",
    answer: "意志",
    explanation: "法律行为的效力通常需要当事人明确的意志表示，才会引发法律后果。",
    source: "第 9 页"
  },
  {
    id: 70, type: QuestionType.FILL_IN,
    title: "法人终止时，必须通过__________程序处理所有未结债务。",
    answer: "清算",
    explanation: "法人终止前必须进行清算程序，以确保其债务得到处理。",
    source: "第 29 页"
  },
  {
    id: 71, type: QuestionType.FILL_IN,
    title: "法定代表人因职务行为产生的责任，通常由__________承担。",
    answer: "法人",
    explanation: "法定代表人在职务行为中所产生的责任，一般由法人承担，除非个人行为违法。",
    source: "第 11 页"
  },
  {
    id: 72, type: QuestionType.FILL_IN,
    title: "司法机关可以在__________的范围内行使司法权。",
    answer: "本国",
    explanation: "司法机关的权力通常局限于本国范围内，除非涉及跨国案件或国际法。",
    source: "第 15 页"
  },
  {
    id: 73, type: QuestionType.FILL_IN,
    title: "法律责任不包括：A.行政责任 B.刑事责任 C.民事责任 D.__________。",
    answer: "司法责任",
    explanation: "司法责任不是法律责任的一部分，法律责任包括行政责任、刑事责任和民事责任。",
    source: "第 19 页"
  },
  {
    id: 74, type: QuestionType.FILL_IN,
    title: "法人合并后，原法人的__________由新法人承担。",
    answer: "权利和义务",
    explanation: "法人合并时，原法人的权利和义务会转移到新法人，原法人不再承担责任。",
    source: "第 29 页"
  },
  {
    id: 75, type: QuestionType.FILL_IN,
    title: "法律的效力范围通常局限于__________。",
    answer: "本国",
    explanation: "法律的效力通常局限于本国领土，除非涉及国际协议或条约。",
    source: "第 15 页"
  },
  {
    id: 76, type: QuestionType.FILL_IN,
    title: "法人解散后，必须进行__________程序。",
    answer: "清算",
    explanation: "法人解散后，必须先进行清算，处理债务 and 财产问题。",
    source: "第 29 页"
  },
  {
    id: 77, type: QuestionType.FILL_IN,
    title: "法律责任中，行政责任通常指的是__________。",
    answer: "行政处罚",
    explanation: "行政责任通常指的是行政机关对违反行政法规的行为进行处罚。",
    source: "第 19 页"
  },
  {
    id: 78, type: QuestionType.FILL_IN,
    title: "法律行为中，涉及权利和义务的变化，通常由__________产生。",
    answer: "法律行为",
    explanation: "法律行为会导致权利和义务的变化，如签订合同。",
    source: "第 9 页"
  },
  {
    id: 79, type: QuestionType.FILL_IN,
    title: "法人不可以从事与__________无关的活动。",
    answer: "清算",
    explanation: "法人在清算期间不得从事 with 清算无关的活动，必须集中处理未结事务。",
    source: "第 29 页"
  },
  {
    id: 80, type: QuestionType.FILL_IN,
    title: "法定代表人执行职务时，法人有责任对外承担__________。",
    answer: "民事责任",
    explanation: "法定代表人在执行职务时，产生的民事责任由法人承担。",
    source: "第 11 页"
  },
  {
    id: 81, type: QuestionType.FILL_IN,
    title: "法律行为中，__________需要当事人之间的意志表示一致。",
    answer: "法律行为",
    explanation: "法律行为要求当事人之间的意志表示一致，通常会导致法律后果的产生。",
    source: "第 9 页"
  },
  {
    id: 82, type: QuestionType.FILL_IN,
    title: "法律责任中，民事责任包括__________、赔偿损失等内容。",
    answer: "停止侵害",
    explanation: "民事责任通常包括停止侵害、返还财产、赔偿损失等，以保护当事人合法权益。",
    source: "第 19 页"
  },
  {
    id: 83, type: QuestionType.FILL_IN,
    title: "法人的责任由__________承担，通常由法定代表人负责。",
    answer: "法人",
    explanation: "法人的责任通常由法人承担，法定代表人作为法人代表负责其对外行为的法律后果。",
    source: "第 11 页"
  },
  {
    id: 84, type: QuestionType.FILL_IN,
    title: "法定代表人在职务行为时，__________通常由法人承担。",
    answer: "法律后果",
    explanation: "法定代表人履行职务时产生的法律后果通常由法人承担，除非代表人有个人过失。",
    source: "第 11 页"
  },
  {
    id: 85, type: QuestionType.FILL_IN,
    title: "法人不可以从事与__________无关的活动。",
    answer: "清算",
    explanation: "法人进入清算程序后，不得从事与清算无关的活动，所有资源和行动都应集中在清算上。",
    source: "第 29 页"
  },
  {
    id: 86, type: QuestionType.FILL_IN,
    title: "法人合并后，原法人的__________由合并后的法人承担。",
    answer: "权利和义务",
    explanation: "法人合并后，合并后的法人会继承原法人的所有权利和义务。",
    source: "第 29 页"
  },
  {
    id: 87, type: QuestionType.FILL_IN,
    title: "法人的终止必须经过__________过程。",
    answer: "清算",
    explanation: "法人的终止需要清算程序，以确保债务得到清偿并且资产得到妥善处置。",
    source: "第 29 页"
  },
  {
    id: 88, type: QuestionType.FILL_IN,
    title: "法人解散后，必须进行__________，债务才可以得到处理。",
    answer: "清算",
    explanation: "法人解散后，首先要进行清算程序，清算结束后法人才能正式终止。",
    source: "第 29 页"
  },
  {
    id: 89, type: QuestionType.FILL_IN,
    title: "法人的债务清偿由__________承担。",
    answer: "法人",
    explanation: "法人解散并进入清算阶段时，其债务由法人资产进行清偿。",
    source: "第 29 页"
  },
  {
    id: 90, type: QuestionType.FILL_IN,
    title: "法律行为的本质是当事人之间意志表示的一致，并导致__________。",
    answer: "法律后果",
    explanation: "法律行为的本质是双方意志的一致，这种一致会引发法律后果，例如合同的成立。",
    source: "第 9 页"
  },
  {
    id: 91, type: QuestionType.FILL_IN,
    title: "关于法人清算，正确的是：法人清算结束后，__________。",
    answer: "法人终止",
    explanation: "法人进入清算阶段后，结束时会正式终止，所有未结债务和财务问题将被清算处理。",
    source: "第 29 页"
  },
  {
    id: 92, type: QuestionType.FILL_IN,
    title: "法律责任中的__________包括罚款、行政拘留等内容。",
    answer: "行政责任",
    explanation: "行政责任通常包括行政罚款、行政拘留等，主要针对违反行政法规的行为。",
    source: "第 19 页"
  },
  {
    id: 93, type: QuestionType.FILL_IN,
    title: "法人解散后必须进行__________程序，清算结束后法人终止。",
    answer: "清算",
    explanation: "法人解散后，必须进行清算，确保债务得到清偿和资产得到妥善处理。",
    source: "第 29 页"
  },
  {
    id: 94, type: QuestionType.FILL_IN,
    title: "下列属于民事责任的是__________。",
    answer: "停止侵害",
    explanation: "停止侵害是民事责任的一部分，涉及保护当事人合法权益。",
    source: "第 19 页"
  },
  {
    id: 95, type: QuestionType.FILL_IN,
    title: "下列属于刑事责任的附加刑的是__________。",
    answer: "罚金",
    explanation: "罚金属于刑事责任中的附加刑，而管制、拘役、无期徒刑是主刑。",
    source: "第 21 页"
  },
  {
    id: 96, type: QuestionType.FILL_IN,
    title: "法律责任的产生通常是由于__________行为导致的。",
    answer: "违法",
    explanation: "法律责任是由于违反法律规定的行为引发的，包括民事、行政和刑事责任。",
    source: "第 19 页"
  },
  {
    id: 97, type: QuestionType.FILL_IN,
    title: "法定代表人在职务行为时的责任通常由__________承担。",
    answer: "法人",
    explanation: "法定代表人在履职过程中产生的责任一般由法人承担。",
    source: "第 11 页"
  },
  {
    id: 98, type: QuestionType.FILL_IN,
    title: "法律行为会导致__________的发生。",
    answer: "法律后果",
    explanation: "法律行为是当事人意志表示一致后，会引发法律后果的行为，如签订合同。",
    source: "第 9 页"
  },
  {
    id: 99, type: QuestionType.FILL_IN,
    title: "法人的责任通常由__________承担。",
    answer: "法人",
    explanation: "法人的责任通常由法人承担，但在职责范围内，法定代表人执行职务所产生的责任也由法人承担。",
    source: "第 11 页"
  },
  {
    id: 100, type: QuestionType.FILL_IN,
    title: "法律责任中的刑事责任，__________是最严重的主刑。",
    answer: "死刑",
    explanation: "死刑是刑事责任中最为严厉的主刑，适用于最严重的犯罪。",
    source: "第 21 页"
  },
  // 判断题 101-150
  {
    id: 101, type: QuestionType.TRUE_FALSE,
    title: "法的本质是由统治阶级的意志体现的。",
    answer: "√",
    explanation: "法的本质是反映统治阶级的国家意志，并且用于维护统治阶级的利益。",
    source: "第 2 页"
  },
  {
    id: 102, type: QuestionType.TRUE_FALSE,
    title: "法的特征包括个人自由性、国家强制性和规范性。",
    answer: "×",
    explanation: "法的特征包括国家强制性、国家意志性和规范性，而不包括个人自由性。",
    source: "第 3 页"
  },
  {
    id: 103, type: QuestionType.TRUE_FALSE,
    title: "法律效力的冲突时，根本法优于普通法。",
    answer: "√",
    explanation: "法律冲突处理原则中，根本法（如宪法）优于普通法（如地方法规、行政法规）。",
    source: "第 7 页"
  },
  {
    id: 104, type: QuestionType.TRUE_FALSE,
    title: "法的效力范围仅限于本国领土，除非涉及国际条约。",
    answer: "√",
    explanation: "法律效力通常局限于本国领土，但国际条约和跨国法律在某些情况下可能会影响法律效力的范围。",
    source: "第 7 页"
  },
  {
    id: 105, type: QuestionType.TRUE_FALSE,
    title: "法的渊源仅限于宪法和法律。",
    answer: "×",
    explanation: "法的渊源包括宪法、法律、行政法规、地方性法规等，判决书并不属于法的渊源。",
    source: "第 6 页"
  },
  {
    id: 106, type: QuestionType.TRUE_FALSE,
    title: "法律行为需要当事人之间的意志表示一致。",
    answer: "√",
    explanation: "法律行为的核心特征是当事人之间意志的一致，只有在当事人意图一致时，才会产生法律后果。",
    source: "第 9 页"
  },
  {
    id: 107, type: QuestionType.TRUE_FALSE,
    title: "在法的效力冲突中，新法优于旧法是法律的一条基本原则。",
    answer: "√",
    explanation: "在法律适用中，新法优于旧法，确保法律始终保持现代性和适应性。",
    source: "第 7 页"
  },
  {
    id: 108, type: QuestionType.TRUE_FALSE,
    title: "法人的责任仅由股东承担。",
    answer: "×",
    explanation: "法人的责任通常由法人承担，法人股东在某些情况下可能需要承担责任，但大多数情况下法人独立承担责任。",
    source: "第 11 页"
  },
  {
    id: 109, type: QuestionType.TRUE_FALSE,
    title: "法人解散后，不需要进行清算程序。",
    answer: "×",
    explanation: "法人解散后必须进入清算程序，清算结束后法人才能正式终止。",
    source: "第 29 页"
  },
  {
    id: 110, type: QuestionType.TRUE_FALSE,
    title: "法定代表人执行职务时产生的法律责任由法人承担。",
    answer: "√",
    explanation: "法定代表人在执行职务时产生的责任通常由法人承担，除非有个人过失或恶意。",
    source: "第 11 页"
  },
  {
    id: 111, type: QuestionType.TRUE_FALSE,
    title: "法律行为的产生需要当事人之间的意志表示一致。",
    answer: "√",
    explanation: "法律行为要求当事人意图一致，以确保行为具有法律效力。",
    source: "第 9 页"
  },
  {
    id: 112, type: QuestionType.TRUE_FALSE,
    title: "法人可以承担刑事责任。",
    answer: "√",
    explanation: "法人作为法律主体，在一定情况下可以承担刑事责任，尤其是在违法行为严重时。",
    source: "第 11 页"
  },
  {
    id: 113, type: QuestionType.TRUE_FALSE,
    title: "法律行为不需要当事人之间的明确意志表示。",
    answer: "×",
    explanation: "法律行为需要当事人之间明确的意志表示，才能产生法律后果。",
    source: "第 9 页"
  },
  {
    id: 114, type: QuestionType.TRUE_FALSE,
    title: "法律行为的主要特征是产生法律后果。",
    answer: "√",
    explanation: "法律行为的核心特征是会产生明确的法律后果，诸如合同签订、遗嘱生效等。",
    source: "第 9 页"
  },
  {
    id: 115, type: QuestionType.TRUE_FALSE,
    title: "法定代表人行为导致的责任只能由其个人承担。",
    answer: "×",
    explanation: "法定代表人执行职务时的责任通常由法人承担，除非行为超出职务范围或涉及个人不当行为。",
    source: "第 11 页"
  },
  {
    id: 116, type: QuestionType.TRUE_FALSE,
    title: "法人的债务在法人解散后由其股东承担。",
    answer: "×",
    explanation: "法人的债务一般由法人资产清偿，股东不直接承担债务，除非特殊情况如非法人组织。",
    source: "第 29 页"
  },
  {
    id: 117, type: QuestionType.TRUE_FALSE,
    title: "法人合并后，原法人的权利和义务将由合并后的法人承担。",
    answer: "√",
    explanation: "法人合并后，原法人的权利和义务通常由合并后的法人继承。",
    source: "第 29 页"
  },
  {
    id: 118, type: QuestionType.TRUE_FALSE,
    title: "法人的民事责任由其法人代表独立承担。",
    answer: "×",
    explanation: "法人的民事责任由法人承担，法人代表在执行职务时所产生的责任通常由法人承担。",
    source: "第 11 页"
  },
  {
    id: 119, type: QuestionType.TRUE_FALSE,
    title: "法律责任中的刑事责任仅包括监禁。",
    answer: "×",
    explanation: "刑事责任包括多种形式，如监禁、罚款、拘役等，不仅仅局限于监禁。",
    source: "第 21 页"
  },
  {
    id: 120, type: QuestionType.TRUE_FALSE,
    title: "法人的行为必须通过清算才能终止其责任。",
    answer: "√",
    explanation: "法人解散后，必须经过清算程序才能清偿债务，清算结束后法人才能正式终止。",
    source: "第 29 页"
  },
  {
    id: 121, type: QuestionType.TRUE_FALSE,
    title: "法律行为必须是书面形式。",
    answer: "×",
    explanation: "法律行为可以是口头或书面，取决于法律要求，很多法律行为，如签订合同，都是口头或书面形式。",
    source: "第 9 页"
  },
  {
    id: 122, type: QuestionType.TRUE_FALSE,
    title: "法律行为不需要当事人之间的意图一致。",
    answer: "×",
    explanation: "法律行为的效力依赖于当事人之间意图的一致，只有意图一致时，才能产生法律后果。",
    source: "第 9 页"
  },
  {
    id: 123, type: QuestionType.TRUE_FALSE,
    title: "法人解散后不需要清算程序，可以直接终止。",
    answer: "×",
    explanation: "法人解散后必须经过清算程序，清算结束后才能终止法人资格。",
    source: "第 29 页"
  },
  {
    id: 124, type: QuestionType.TRUE_FALSE,
    title: "法定代表人行为产生的法律责任由法人承担。",
    answer: "√",
    explanation: "法定代表人在执行职务时产生的责任一般由法人承担，除非其行为不当或超出职务范围。",
    source: "第 11 页"
  },
  {
    id: 125, type: QuestionType.TRUE_FALSE,
    title: "法人的财产责任由出资人承担。",
    answer: "×",
    explanation: "法人的财产责任通常由法人承担，股东 and 出资人通常不承担责任，除非法人组织非法或其他特殊情况。",
    source: "第 13 页"
  },
  {
    id: 126, type: QuestionType.TRUE_FALSE,
    title: "法律责任中的民事责任包括停止侵害、赔偿损失等内容。",
    answer: "√",
    explanation: "民事责任的主要内容包括停止侵害、赔偿损失等形式，旨在恢复受害人权益。",
    source: "第 19 页"
  },
  {
    id: 127, type: QuestionType.TRUE_FALSE,
    title: "法定代表人超越职务行为产生的责任由法人承担。",
    answer: "×",
    explanation: "法定代表人超越职务行为产生的责任由法人承担，若行为违法，法人可能不承担责任。",
    source: "第 11 页"
  },
  {
    id: 128, type: QuestionType.TRUE_FALSE,
    title: "法人的行为是法律行为的一部分。",
    answer: "√",
    explanation: "法人的行为包括签订合同、实施民事行为等，属于法律行为的一部分。",
    source: "第 9 页"
  },
  {
    id: 129, type: QuestionType.TRUE_FALSE,
    title: "法律责任中的刑事责任包括处罚个人的行为。",
    answer: "√",
    explanation: "刑事责任包括针对犯罪行为的处罚，通常涉及个人责任。",
    source: "第 21 页"
  },
  {
    id: 130, type: QuestionType.TRUE_FALSE,
    title: "法律行为可以是口头的，也可以是书面的。",
    answer: "√",
    explanation: "法律行为可以通过口头或书面形式进行，取决于法律的要求。",
    source: "第 9 页"
  },
  {
    id: 131, type: QuestionType.TRUE_FALSE,
    title: "法律责任仅适用于法人。",
    answer: "×",
    explanation: "法律责任适用于所有法律主体，包括自然人、法人、非法人组织等。",
    source: "第 19 页"
  },
  {
    id: 132, type: QuestionType.TRUE_FALSE,
    title: "法人的责任只包括民事责任，不包括刑事责任。",
    answer: "×",
    explanation: "法人不仅可以承担民事责任，还可以在某些情况下承担刑事责任。",
    source: "第 11 页"
  },
  {
    id: 133, type: QuestionType.TRUE_FALSE,
    title: "法律行为的本质是当事人之间意志的一致。",
    answer: "√",
    explanation: "法律行为的本质是当事人之间的意志一致，这种一致决定了法律行为的效力。",
    source: "第 9 页"
  },
  {
    id: 134, type: QuestionType.TRUE_FALSE,
    title: "法人的责任只能由股东承担。",
    answer: "×",
    explanation: "法人的责任由法人承担，股东一般不承担责任，除非特殊情况。",
    source: "第 11 页"
  },
  {
    id: 135, type: QuestionType.TRUE_FALSE,
    title: "法人合并后，原法人的权利和义务由合并后的法人承担。",
    answer: "√",
    explanation: "法人合并后，原法人的所有权利 and 义务会转移到合并后的法人。",
    source: "第 29 页"
  },
  {
    id: 136, type: QuestionType.TRUE_FALSE,
    title: "法律责任包括刑事责任、民事责任和行政责任。",
    answer: "√",
    explanation: "法律责任主要包括刑事责任、民事责任和行政责任，每种责任针对不同的法律违规行为。",
    source: "第 19 页"
  },
  {
    id: 137, type: QuestionType.TRUE_FALSE,
    title: "法定代表人行为不产生法人责任。",
    answer: "×",
    explanation: "法定代表人执行职务时所产生的责任由法人承担。",
    source: "第 11 页"
  },
  {
    id: 138, type: QuestionType.TRUE_FALSE,
    title: "法律责任中的行政责任不涉及行政处罚。",
    answer: "×",
    explanation: "行政责任通常包括行政处罚，旨在制止 and 处罚违法行为。",
    source: "第 19 页"
  },
  {
    id: 139, type: QuestionType.TRUE_FALSE,
    title: "法人解散后，仍需承担债务。",
    answer: "√",
    explanation: "法人解散后，必须通过清算程序来偿还债务，直到清算结束。",
    source: "第 29 页"
  },
  {
    id: 140, type: QuestionType.TRUE_FALSE,
    title: "法人的责任可以由个人股东承担。",
    answer: "×",
    explanation: "法人的责任通常由法人承担，股东一般不需要承担除非特殊情况。",
    source: "第 13 页"
  },
  {
    id: 141, type: QuestionType.TRUE_FALSE,
    title: "法人的债务不需要经过清算程序。",
    answer: "×",
    explanation: "法人解散后，债务必须经过清算程序，直到债务清偿完毕，法人才会终止。",
    source: "第 29 页"
  },
  {
    id: 142, type: QuestionType.TRUE_FALSE,
    title: "法定代表人行为的责任可以由法人免除。",
    answer: "×",
    explanation: "法定代表人执行职务时，产生的责任通常由法人承担，无法免除。",
    source: "第 11 页"
  },
  {
    id: 143, type: QuestionType.TRUE_FALSE,
    title: "法律责任中的民事责任主要包括赔偿损失和停止侵害。",
    answer: "√",
    explanation: "民事责任的主要目的是恢复受害者的合法权益，包括赔偿损失和停止侵害。",
    source: "第 19 页"
  },
  {
    id: 144, type: QuestionType.TRUE_FALSE,
    title: "法人可以独立承担刑事责任。",
    answer: "√",
    explanation: "法人可以在特定情况下承担刑事责任，尤其是违法行为严重时。",
    source: "第 11 页"
  },
  {
    id: 145, type: QuestionType.TRUE_FALSE,
    title: "法人解散后不必进行清算。",
    answer: "×",
    explanation: "法人解散后，必须进入清算程序，直到债务清偿完毕才能正式终止。",
    source: "第 29 页"
  },
  {
    id: 146, type: QuestionType.TRUE_FALSE,
    title: "法定代表人在职务行为中产生的责任由法人承担。",
    answer: "√",
    explanation: "法定代表人在执行职务时的行为通常由法人承担责任。",
    source: "第 11 页"
  },
  {
    id: 147, type: QuestionType.TRUE_FALSE,
    title: "法人的责任通常由股东个人承担。",
    answer: "×",
    explanation: "法人的责任由法人承担，股东通常不需要承担责任，除非是非法人组织等特殊情况。",
    source: "第 11 页"
  },
  {
    id: 148, type: QuestionType.TRUE_FALSE,
    title: "法人的债务通常由法人资产清偿。",
    answer: "√",
    explanation: "法人解散并进入清算阶段时，债务由法人资产进行清偿。",
    source: "第 29 页"
  },
  {
    id: 149, type: QuestionType.TRUE_FALSE,
    title: "法定代表人行为不产生法人责任。",
    answer: "×",
    explanation: "法定代表人执行职务时所产生的责任，通常由法人承担。",
    source: "第 11 页"
  },
  {
    id: 150, type: QuestionType.TRUE_FALSE,
    title: "法人解散后，继续从事业务，直至债务清偿完毕。",
    answer: "×",
    explanation: "法人解散后必须进行清算，清算期间不得从事与清算无关的活动。",
    source: "第 29 页"
  }
];
