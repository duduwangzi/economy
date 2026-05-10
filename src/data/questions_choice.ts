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
    explanation: "会计法律制度是国家层面的规范体系，其制定主体包括国家权力机关（如人大） and 行政机关（如财政部）。其内容涵盖法律、行政法规、部门规章及规范性文件，形成一个完整的制度体系。",
    source: "第1页"
  },
  {
    id: 52, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计法律制度调整的对象是（ ）。",
    options: ["A. 企业经营关系", "B. 会计关系", "C. 税收关系", "D. 民事关系"],
    answer: "B",
    explanation: "会计法律制度专门用于调整在会计工作过程中形成的社会关系，即“会计关系”。",
    source: "第1页"
  },
  {
    id: 53, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于会计关系的表述中，正确的是（ ）。",
    options: ["A. 主体仅为单位负责人", "B. 客体是会计制度", "C. 主体包括会计机构 and 会计人员", "D. 不包括国家管理关系"],
    answer: "C",
    explanation: "会计关系的主体主要是会计机构和会计人员；客体是具体的会计事项（如资金运动）；此外还包括国家对会计工作的管理关系。",
    source: "第1页"
  },
  {
    id: 54, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列各项中，属于会计法律制度组成部分的是（ ）。",
    options: ["A. 企业内部财务制度", "B. 《中华人民共和国会计法》", "C. 企业经营计划", "D. 内部控制制度"],
    answer: "B",
    explanation: "会计法律制度属于国家制定的规范体系，其中《会计法》属于法律层级内容。企业内部制度和经营计划属于单位内部管理，不属于国家会计法律制度范围。",
    source: "第1页"
  },
  {
    id: 55, type: QuestionType.MULTIPLE_CHOICE,
    title: "全国会计工作的主管部门是（ ）。",
    options: ["A. 审计署", "B. 税务总局", "C. 国务院财政部门", "D. 中国人民银行"],
    answer: "C",
    explanation: "根据法律规定，全国会计工作由国务院财政部门统一管理，这是教材中的原文表述，是考试中的高频考点。",
    source: "第2页"
  },
  {
    id: 56, type: QuestionType.MULTIPLE_CHOICE,
    title: "县级以上地方各级人民政府管理本行政区域会计工作的部门是（ ）。",
    options: ["A. 审计部门", "B. 财政部门", "C. 税务机关", "D. 统计部门"],
    answer: "B",
    explanation: "地方会计工作管理与中央一致，均由财政部门负责。审计部门负责监督，税务机关负责税收，统计部门负责统计数据，因此只有财政部门符合规定。",
    source: "第2页"
  },
  {
    id: 57, type: QuestionType.MULTIPLE_CHOICE,
    title: "对本单位会计工作和会计资料真实性、完整性负责的是（ ）。",
    options: ["A. 会计人员", "B. 会计机构负责人", "C. 单位负责人", "D. 出纳人员"],
    answer: "C",
    explanation: "单位负责人是会计工作的第一责任人，对会计资料的真实性和完整性承担最终法律责任。会计人员只是执行具体工作，不承担最终责任，这是考试中的高频易错点。",
    source: "第2页"
  },
  {
    id: 58, type: QuestionType.MULTIPLE_CHOICE,
    title: "单位负责人不得（ ）。",
    options: ["A. 审核会计资料", "B. 编制财务报表", "C. 指使、授意会计人员违法办理会计事项", "D. 检查账簿"],
    answer: "C",
    explanation: "法律明确规定，单位负责人不得授意、指使或强令会计人员从事违法行为，这是保障会计信息真实可靠的重要制度安排。",
    source: "第2页"
  },
  {
    id: 59, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列说法中，错误的是（ ）。",
    options: ["A. 单位负责人对会计资料负责", "B. 财政部门主管会计工作", "C. 会计人员对真实性承担最终责任", "D. 不得违法干预会计工作"],
    answer: "C",
    explanation: "会计资料真实性和完整性的最终责任主体是单位负责人，而不是会计人员。因此C错误，其余选项均符合规定。",
    source: "第2页"
  },
  {
    id: 60, type: QuestionType.MULTIPLE_CHOICE,
    title: "国家实行统一的会计制度，该制度由（ ）制定并公布。",
    options: ["A. 全国人民代表大会", "B. 国务院", "C. 国务院财政部门", "D. 审计署"],
    answer: "C",
    explanation: "国家统一会计制度由国务院财政部门制定并发布，需要与“会计法由全国人大制定”区分开，这是考试中的常见考点。",
    source: "第1页"
  },
  {
    id: 61, type: QuestionType.MULTIPLE_CHOICE,
    title: "各单位必须依法设置会计账簿，不得（ ）。",
    options: ["A. 设置总账", "B. 使用电子账簿", "C. 私设会计账簿", "D. 设置明细账"],
    answer: "C",
    explanation: "依法建账是基本要求，禁止“私设账簿”（账外账）。私设账簿会导致会计信息失真，属于严重违法行为。",
    source: "第3页"
  },
  {
    id: 62, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计核算应当以（ ）为依据。",
    options: ["A. 预算数据", "B. 实际发生的经济业务", "C. 预测数据", "D. 合同约定"],
    answer: "B",
    explanation: "会计核算必须以“已经实际发生”的经济业务为依据，这是会计确认与计量的前提。预算、预测或仅签订合同但未发生业务的事项，不得据此入账。",
    source: "第3页"
  },
  {
    id: 63, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计资料最基本的质量要求是（ ）。",
    options: ["A. 可比性", "B. 及时性", "C. 真实性和完整性", "D. 谨慎性"],
    answer: "C",
    explanation: "真实性和完整性是会计信息质量的基础性要求，是其他质量特征（如可比性、及时性等）的前提条件。",
    source: "第3页"
  },
  {
    id: 64, type: QuestionType.MULTIPLE_CHOICE,
    title: "以虚假的经济业务事项编制会计凭证的行为属于（ ）。",
    options: ["A. 变造会计资料", "B. 伪造会计资料", "C. 错误记账", "D. 重复记账"],
    answer: "B",
    explanation: "“伪造”是指无中生有，即以不存在的经济业务编制会计资料；“变造”是对真实资料进行篡改。",
    source: "第3页"
  },
  {
    id: 65, type: QuestionType.MULTIPLE_CHOICE,
    title: "将原始凭证金额由10,000元涂改为40,000元的行为属于（ ）。",
    options: ["A. 伪造会计资料", "B. 变造会计资料", "C. 错账更正", "D. 合法调整"],
    answer: "B",
    explanation: "该行为是在真实凭证基础上对金额进行涂改，属于“变造”。区分要点：伪造=无中生有；变造=在真实基础上篡改。",
    source: "第4页"
  },
  {
    id: 66, type: QuestionType.MULTIPLE_CHOICE,
    title: "各单位采用的会计处理方法，应当（ ）。",
    options: ["A. 根据利润情况随时变更", "B. 保持前后各期一致", "C. 由会计人员自行决定", "D. 可以不作说明变更"],
    answer: "B",
    explanation: "会计处理方法应保持一致性，以保证会计信息的可比性。如确需变更，应说明原因及影响，不得随意变更。",
    source: "第3页"
  },
  {
    id: 67, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计记录的文字应当使用（ ）。",
    options: ["A. 英文", "B. 中文", "C. 任意语言", "D. 拉丁文"],
    answer: "B",
    explanation: "会计记录必须使用中文，这是法定要求；在民族自治地区或对外业务中，可以同时使用其他文字，但中文必须作为主要记录语言。",
    source: "第3页"
  },
  {
    id: 68, type: QuestionType.MULTIPLE_CHOICE,
    title: "我国的会计年度为（ ）。",
    options: ["A. 企业自行确定", "B. 财政年度", "C. 公历1月1日至12月31日", "D. 任意连续12个月"],
    answer: "C",
    explanation: "我国统一采用公历年度作为会计年度，即1月1日至12月31日。单位不得自行选择其他期间作为会计年度。",
    source: "第3页"
  },
  {
    id: 69, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于会计电算化的表述中，正确的是（ ）。",
    options: ["A. 可不遵循会计制度", "B. 只需符合企业内部规定", "C. 必须符合国家统一会计制度", "D. 仅用于提高效率"],
    answer: "C",
    explanation: "实行会计电算化的单位，其软件、数据处理 and 会计资料仍必须符合国家统一会计制度的要求，不能因信息化而降低规范性。",
    source: "第3页"
  },
  {
    id: 70, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列事项中，属于会计核算内容的是（ ）。",
    options: ["A. 制定经营计划", "B. 资产的增减变化", "C. 人员招聘", "D. 签订合同"],
    answer: "B",
    explanation: "会计核算的内容是资金运动，包括资产、负债、所有者权益、收入、费用和利润的增减变化。制定计划、招聘人员、单纯签订合同不直接构成核算内容。",
    source: "第5页"
  },
  {
    id: 71, type: QuestionType.MULTIPLE_CHOICE,
    title: "从外单位取得的原始凭证，必须（ ）。",
    options: ["A. 由会计人员签字", "B. 加盖填制单位公章", "C. 由单位负责人签字", "D. 由出纳签字"],
    answer: "B",
    explanation: "外来原始凭证必须加盖“填制单位公章”，以保证凭证的合法性和真实性。仅有个人签字不能替代单位公章。",
    source: "第6页"
  },
  {
    id: 72, type: QuestionType.MULTIPLE_CHOICE,
    title: "自制原始凭证应当由（ ）签名或者盖章。",
    options: ["A. 会计人员", "B. 经办单位负责人或其指定人员", "C. 出纳人员", "D. 审计人员"],
    answer: "B",
    explanation: "内部凭证需要由经办单位负责人或其授权人员签章，以确认业务真实发生并承担责任。",
    source: "第6页"
  },
  {
    id: 73, type: QuestionType.MULTIPLE_CHOICE,
    title: "原始凭证记载的内容不真实、不合法的，会计人员应当（ ）。",
    options: ["A. 退回更正", "B. 直接入账", "C. 不予接受并向单位负责人报告", "D. 先入账后处理"],
    answer: "C",
    explanation: "对于“不真实、不合法”的凭证，应直接拒绝接受并报告；这是比“内容不完整”更严重的情形。",
    source: "第6页"
  },
  {
    id: 74, type: QuestionType.MULTIPLE_CHOICE,
    title: "原始凭证记载内容不完整、不准确的，应当（ ）。",
    options: ["A. 直接入账", "B. 拒绝接受", "C. 退回补充或更正", "D. 自行修改"],
    answer: "C",
    explanation: "不完整或不准确属于一般性问题，应退回补充或更正；注意与“不真实”的处理方式区分。",
    source: "第6页"
  },
  {
    id: 75, type: QuestionType.MULTIPLE_CHOICE,
    title: "原始凭证金额错误的，应当（ ）。",
    options: ["A. 划线更正", "B. 加盖印章更正", "C. 重新开具", "D. 会计人员修改"],
    answer: "C",
    explanation: "金额错误属于关键错误，必须由原开具单位重新开具凭证，不能更改。",
    source: "第6页"
  },
  {
    id: 76, type: QuestionType.MULTIPLE_CHOICE,
    title: "原始凭证不得（ ）。",
    options: ["A. 复印", "B. 保管", "C. 外借", "D. 归档"],
    answer: "C",
    explanation: "原始凭证原则上不得外借，如确需使用，应经批准并提供复制件。这是保护会计资料安全的重要规定。",
    source: "第6页"
  },
  {
    id: 77, type: QuestionType.MULTIPLE_CHOICE,
    title: "记账凭证应当根据（ ）编制。",
    options: ["A. 财务报表", "B. 原始凭证", "C. 合同", "D. 预算"],
    answer: "B",
    explanation: "记账凭证必须以原始凭证为依据，这是会计核算的基本流程：原始凭证 → 记账凭证 → 账簿。",
    source: "第7页"
  },
  {
    id: 78, type: QuestionType.MULTIPLE_CHOICE,
    title: "填制记账凭证时，可以根据（ ）填制。",
    options: ["A. 单张原始凭证", "B. 原始凭证汇总表", "C. 同类原始凭证汇总", "D. 任意资料"],
    answer: "A",
    explanation: "标准表述中，记账凭证可以依据单张或汇总的原始凭证，但单选题通常考“基本依据”，即原始凭证本身。选项D错误，因必须来源合法。",
    source: "第7页"
  },
  {
    id: 79, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列各项中，属于会计账簿的是（ ）。",
    options: ["A. 总账", "B. 合同", "C. 发票", "D. 报告"],
    answer: "A",
    explanation: "会计账簿包括总账、明细账和日记账。合同和发票属于原始资料，不属于账簿。",
    source: "第8页"
  },
  {
    id: 80, type: QuestionType.MULTIPLE_CHOICE,
    title: "现金日记账和银行存款日记账必须采用（ ）。",
    options: ["A. 活页式", "B. 卡片式", "C. 订本式", "D. 电子式"],
    answer: "C",
    explanation: "日记账必须采用订本式，以防止随意撕页或更换页面，从而保证账簿的完整性和连续性。",
    source: "第8页"
  },
  {
    id: 81, type: QuestionType.MULTIPLE_CHOICE,
    title: "账账核对是指（ ）。",
    options: ["A. 账簿记录与实物核对", "B. 不同会计账簿之间的核对", "C. 会计账簿与凭证核对", "D. 账簿与报表核对"],
    answer: "B",
    explanation: "账账核对是指不同账簿之间的数据核对，如总账与明细账之间的核对，以保证账簿之间记录一致。",
    source: "第9页"
  },
  {
    id: 82, type: QuestionType.MULTIPLE_CHOICE,
    title: "账证核对是指（ ）。",
    options: ["A. 账簿与实物核对", "B. 账簿与报表核对", "C. 会计账簿与会计凭证核对", "D. 不同账簿核对"],
    answer: "C",
    explanation: "账证核对是指会计账簿记录与记账凭证之间的核对，用于检查账簿记录是否依据凭证正确登记。",
    source: "第9页"
  },
  {
    id: 83, type: QuestionType.MULTIPLE_CHOICE,
    title: "银行存款日记账与银行对账单核对属于（ ）。",
    options: ["A. 账账核对", "B. 账证核对", "C. 账实核对", "D. 账表核对"],
    answer: "C",
    explanation: "银行对账单属于实际资金情况，因此与账簿核对属于账实核对，而不是账账核对。",
    source: "第10页"
  },
  {
    id: 84, type: QuestionType.MULTIPLE_CHOICE,
    title: "财务会计报告的编制依据是（ ）。",
    options: ["A. 原始凭证", "B. 记账凭证", "C. 会计账簿记录", "D. 合同"],
    answer: "C",
    explanation: "财务会计报告是在账簿记录基础上编制的，账簿是会计数据的汇总来源，因此报告必须以账簿为依据。",
    source: "第4页"
  },
  {
    id: 85, type: QuestionType.MULTIPLE_CHOICE,
    title: "对外报送的财务会计报告应当（ ）。",
    options: ["A. 可以不一致", "B. 根据需要调整", "C. 保证真实、完整", "D. 只需内部一致"],
    answer: "C",
    explanation: "对外提供的财务报告必须真实、完整，反映单位财务状况 and 经营成果，不得虚假或遗漏。",
    source: "第4页"
  },
  {
    id: 86, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计档案不包括（ ）。",
    options: ["A. 会计凭证", "B. 会计账簿", "C. 财务会计报告", "D. 财务预算"],
    answer: "D",
    explanation: "会计档案是已经形成的会计资料，包括凭证、账簿和报告等；预算属于计划性文件，不属于会计档案。",
    source: "第12页"
  },
  {
    id: 87, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计档案在单位内部的临时保管期限为（ ）。",
    options: ["A. 2年", "B. 1年", "C. 3年", "D. 6个月"],
    answer: "B",
    explanation: "会计档案形成后，应先由本单位保管1年，然后再移交档案机构集中管理。",
    source: "第12页"
  },
  {
    id: 88, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计档案最迟应在形成后（ ）年内移交档案机构。",
    options: ["A. 1", "B. 2", "C. 3", "D. 5"],
    answer: "C",
    explanation: "法律规定最迟不得超过3年，这是典型数字类考点，需要准确记忆。",
    source: "第12页"
  },
  {
    id: 89, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列会计档案中，应永久保存的是（ ）。",
    options: ["A. 原始凭证", "B. 记账凭证", "C. 年度财务会计报告", "D. 银行对账单"],
    answer: "C",
    explanation: "年度财务会计报告反映单位长期财务状况和经营成果，具有历史价值，应永久保存。",
    source: "第13页"
  },
  {
    id: 90, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计档案保管期满销毁时，应由（ ）牵头组织鉴定。",
    options: ["A. 财政部门", "B. 档案机构", "C. 审计部门", "D. 税务机关"],
    answer: "B",
    explanation: "会计档案的鉴定与销毁由档案机构牵头组织，确保程序规范和资料安全。",
    source: "第15页"
  },
  {
    id: 91, type: QuestionType.MULTIPLE_CHOICE,
    title: "单位内部会计监督的主体是（ ）。",
    options: ["A. 财政部门", "B. 会计机构和会计人员", "C. 审计机关", "D. 税务机关"],
    answer: "B",
    explanation: "单位内部会计监督由本单位内部实施，其执行主体是会计机构和会计人员。这是内部监督体系的核心执行力量。",
    source: "第16页"
  },
  {
    id: 92, type: QuestionType.MULTIPLE_CHOICE,
    title: "单位内部会计监督的重点是（ ）。",
    options: ["A. 提高利润", "B. 防止舞弊", "C. 编制报表", "D. 降低成本"],
    answer: "B",
    explanation: "内部会计监督的核心目标是防止舞弊、保障资产安全和保证会计信息真实可靠。",
    source: "第16页"
  },
  {
    id: 93, type: QuestionType.MULTIPLE_CHOICE,
    title: "内部控制制度中，不相容职务应当（ ）。",
    options: ["A. 由同一人承担", "B. 相互分离", "C. 随意安排", "D. 由领导决定"],
    answer: "B",
    explanation: "不相容职务分离是内部控制的核心原则，例如“审批、执行、记录”不能由同一人完成。",
    source: "第16页"
  },
  {
    id: 94, type: QuestionType.MULTIPLE_CHOICE,
    title: "重大经济业务事项应当实行（ ）。",
    options: ["A. 个人决定制度", "B. 集体决策和审批制度", "C. 会计决定制度", "D. 财务决定制度"],
    answer: "B",
    explanation: "重大事项必须通过集体决策和审批，防止权力集中带来的风险，这是内部监督的重要内容。",
    source: "第16页"
  },
  {
    id: 95, type: QuestionType.MULTIPLE_CHOICE,
    title: "单位应当定期进行财产清查，以保证（ ）。",
    options: ["A. 利润最大化", "B. 成本最低", "C. 账实相符", "D. 报表完整"],
    answer: "C",
    explanation: "财产清查的核心目的是确保账面记录与实际资产一致，即“账实相符”。",
    source: "第17页"
  },
  {
    id: 96, type: QuestionType.MULTIPLE_CHOICE,
    title: "政府会计监督的主体是（ ）。",
    options: ["A. 企业内部", "B. 财政部门", "C. 银行", "D. 会计师事务所"],
    answer: "B",
    explanation: "政府监督由财政部门依法实施，对单位会计行为进行检查和监督。",
    source: "第17页"
  },
  {
    id: 97, type: QuestionType.MULTIPLE_CHOICE,
    title: "社会会计监督的实施主体是（ ）。",
    options: ["A. 财政部门", "B. 审计机关", "C. 注册会计师及其所在的会计师事务所", "D. 税务机关"],
    answer: "C",
    explanation: "社会监督是由独立第三方实施，主要是注册会计师及会计师事务所对财务报告进行审计。",
    source: "第17页"
  },
  {
    id: 98, type: QuestionType.MULTIPLE_CHOICE,
    title: "单位是否设置会计机构，应根据（ ）确定。",
    options: ["A. 税务要求", "B. 单位规模和业务需要", "C. 银行规定", "D. 审计要求"],
    answer: "B",
    explanation: "法律允许单位根据规模和业务复杂程度决定是否单设会计机构，但必须配备会计人员。",
    source: "第18页"
  },
  {
    id: 99, type: QuestionType.MULTIPLE_CHOICE,
    title: "出纳人员不得兼任（ ）。",
    options: ["A. 现金保管", "B. 银行存款收付", "C. 收入、费用账登记", "D. 日记账登记"],
    answer: "C",
    explanation: "出纳负责资金收付，但不得兼任会计核算岗位（如收入、费用账登记），体现不相容职务分离原则。",
    source: "第18页"
  },
  {
    id: 100, type: QuestionType.MULTIPLE_CHOICE,
    title: "担任会计机构负责人，应具备（ ）。",
    options: ["A. 任意学历", "B. 无需经验", "C. 会计师以上专业技术资格或一定年限的会计工作经验", "D. 单位任命即可"],
    answer: "C",
    explanation: "会计机构负责人必须具备专业能力要求，通常需要中级以上职称或一定年限的会计工作经验。",
    source: "第18页"
  },
  {
    id: 101, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计人员应当具备的基本条件不包括（ ）。",
    options: ["A. 遵守会计法律法规", "B. 具备良好的职业道德", "C. 具备一定的专业能力", "D. 必须具有高级职称"],
    answer: "D",
    explanation: "会计人员应具备基本职业素养和专业能力，但并未要求必须具备高级职称。",
    source: "第19页"
  },
  {
    id: 102, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计人员继续教育的目的是（ ）。",
    options: ["A. 提高学历", "B. 提升业务能力和职业道德水平", "C. 增加工资", "D. 完成考核任务"],
    answer: "B",
    explanation: "继续教育的核心目的是不断提升会计人员的专业能力和职业道德水平。",
    source: "第19页"
  },
  {
    id: 103, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计人员调动工作或者离职时，必须办理（ ）。",
    options: ["A. 审计手续", "B. 移交手续", "C. 报告手续", "D. 注销手续"],
    answer: "B",
    explanation: "会计工作具有连续性和重要性，因此在人员变动时必须进行工作交接。",
    source: "第19页"
  },
  {
    id: 104, type: QuestionType.MULTIPLE_CHOICE,
    title: "一般会计人员办理交接手续时，应由（ ）监交。",
    options: ["A. 单位负责人", "B. 会计机构负责人", "C. 财政部门", "D. 审计机关"],
    answer: "B",
    explanation: "一般会计人员交接，应由会计机构负责人或会计主管人员负责监交。",
    source: "第20页"
  },
  {
    id: 105, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计机构负责人办理交接手续时，应由（ ）监交。",
    options: ["A. 会计人员", "B. 出纳人员", "C. 单位负责人", "D. 审计人员"],
    answer: "C",
    explanation: "当会计机构负责人发生变动时，应由单位负责人负责监交，以提高监督层级。",
    source: "第20页"
  },
  {
    id: 106, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计人员在交接时，应对移交资料的（ ）负责。",
    options: ["A. 合法性", "B. 真实性和完整性", "C. 盈利能力", "D. 经济效益"],
    answer: "B",
    explanation: "交接人员应保证所移交会计资料的真实性和完整性，这是法律明确规定的责任内容。",
    source: "第20页"
  },
  {
    id: 107, type: QuestionType.MULTIPLE_CHOICE,
    title: "接替人员在交接后发现问题，应由（ ）负责。",
    options: ["A. 接替人员", "B. 原移交人员", "C. 单位负责人", "D. 审计人员"],
    answer: "B",
    explanation: "交接完成后，原会计人员仍对其在任期间的会计资料真实性、完整性承担责任。",
    source: "第20页"
  },
  {
    id: 108, type: QuestionType.MULTIPLE_CHOICE,
    title: "违反会计法律制度，应承担的法律责任不包括（ ）。",
    options: ["A. 行政责任", "B. 刑事责任", "C. 民事责任", "D. 道德责任"],
    answer: "D",
    explanation: "法律责任包括行政责任、民事责任和刑事责任。道德责任属于伦理范畴，不属于法律责任。",
    source: "第21页"
  },
  {
    id: 109, type: QuestionType.MULTIPLE_CHOICE,
    title: "伪造、变造会计资料，情节严重的，可能承担（ ）。",
    options: ["A. 行政责任", "B. 民事责任", "C. 刑事责任", "D. 经济责任"],
    answer: "C",
    explanation: "当违法行为情节严重时，将上升为犯罪行为，需要承担刑事责任。",
    source: "第21页"
  },
  {
    id: 110, type: QuestionType.MULTIPLE_CHOICE,
    title: "单位负责人对依法履行职责、坚持原则的会计人员进行打击报复的，应承担（ ）。",
    options: ["A. 行政责任", "B. 民事责任", "C. 刑事责任或行政责任", "D. 无需承担责任"],
    answer: "C",
    explanation: "法律保护会计人员依法履职，对打击报复行为视情节轻重追究行政责任或刑事责任。",
    source: "第21页"
  },
  {
    id: 111, type: QuestionType.MULTIPLE_CHOICE,
    title: "授意、指使、强令会计人员违法办理会计事项的单位负责人，应承担的责任是（ ）。",
    options: ["A. 仅承担道德责任", "B. 仅承担民事责任", "C. 承担行政责任或刑事责任", "D. 不承担责任"],
    answer: "C",
    explanation: "单位负责人如果授意或强令会计人员违法，根据情节轻重，可能承担行政责任或刑事责任。",
    source: "第22页"
  },
  {
    id: 112, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计人员依法履行职责受法律保护，其含义不包括（ ）。",
    options: ["A. 不受单位非法干预", "B. 不受打击报复", "C. 可以违反规定", "D. 可以依法拒绝违法指令"],
    answer: "C",
    explanation: "法律保护会计人员依法履职，前提是“依法”，并不允许其违反规定。",
    source: "第22页"
  },
  {
    id: 113, type: QuestionType.MULTIPLE_CHOICE,
    title: "对依法履职的会计人员进行打击报复的，应当（ ）。",
    options: ["A. 不予处理", "B. 仅批评教育", "C. 依法追究责任", "D. 内部处理即可"],
    answer: "C",
    explanation: "法律明确规定对打击报复行为应依法追究责任，以保障会计人员独立履职。",
    source: "第22页"
  },
  {
    id: 114, type: QuestionType.MULTIPLE_CHOICE,
    title: "违反会计法规定，隐匿或者故意销毁会计资料的，可能承担（ ）。",
    options: ["A. 行政责任", "B. 民事责任", "C. 刑事责任", "D. 以上均可能"],
    answer: "D",
    explanation: "根据行为严重程度不同，可能承担行政责任、民事责任甚至刑事责任。",
    source: "第22页"
  },
  {
    id: 115, type: QuestionType.MULTIPLE_CHOICE,
    title: "伪造会计资料与变造会计资料的本质区别在于（ ）。",
    options: ["A. 是否违法", "B. 是否涉及金额", "C. 是否基于真实资料", "D. 是否由会计人员操作"],
    answer: "C",
    explanation: "伪造是“无中生有”，不基于真实资料；变造是在真实资料基础上进行篡改。",
    source: "第22页"
  },
  {
    id: 116, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计人员违反职业道德但未触犯法律的，应承担（ ）。",
    options: ["A. 刑事责任", "B. 行政责任", "C. 道德责任", "D. 民事责任"],
    answer: "C",
    explanation: "如果仅违反职业道德而未违反法律规定，则承担的是道德责任，而不是法律责任。",
    source: "第23页"
  },
  {
    id: 117, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计职业道德的核心内容是（ ）。",
    options: ["A. 提高收入", "B. 爱岗敬业、诚实守信", "C. 提高效率", "D. 完成任务"],
    answer: "B",
    explanation: "会计职业道德强调诚信和责任，其中“爱岗敬业、诚实守信”是核心内容。",
    source: "第23页"
  },
  {
    id: 118, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计人员应当坚持的基本原则是（ ）。",
    options: ["A. 服从领导", "B. 依法办事", "C. 提高利润", "D. 降低成本"],
    answer: "B",
    explanation: "会计人员必须依法办事，这是职业行为的基本准则，高于单位内部指令。",
    source: "第23页"
  },
  {
    id: 119, type: QuestionType.MULTIPLE_CHOICE,
    title: "会计职业道德与会计法律制度的关系是（ ）。",
    options: ["A. 完全相同", "B. 相互替代", "C. 相互补充", "D. 毫无关系"],
    answer: "C",
    explanation: "会计法律制度具有强制性，而职业道德具有自律性，两者相互补充，共同规范会计行为。",
    source: "第23页"
  },
  {
    id: 120, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于会计职业道德的表述中，正确的是（ ）。",
    options: ["A. 没有约束力", "B. 仅靠自觉遵守", "C. 是会计行为的重要规范", "D. 不需要学习"],
    answer: "C",
    explanation: "会计职业道德虽然不完全等同法律，但对规范会计行为具有重要作用，是会计人员必须遵守的行为准则。",
    source: "第23页"
  },
];
