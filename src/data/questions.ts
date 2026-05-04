import { Question, QuestionType } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据法的本质，下列关于“法的本质”的表述中，正确的是（ ）。",
    options: ["A. 法是全社会成员共同意志的体现", "B. 法体现的是统治阶级的每个成员个人意志的简单相加", "C. 法是由统治阶级的物质生活条件所决定的", "D. 法体现的是被统治阶级的意志"],
    answer: "C", explanation: "选项A，法是“统治阶级”意志的体现，而非全社会成员；选项B，法体现的是统治阶级的“整体意志”，不是个人意志的简单相加；选项D，法不体现被统治阶级的意志。",
    source: "第2页"
  },
  {
    id: 2, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列对法所作的分类中，属于根据“法的内容、效力和制定程序”进行分类的是（ ）。",
    options: ["A. 成文法和不成文法", "B. 根本法和普通法", "C. 一般法和特别法", "D. 实体法和程序法"],
    answer: "B", explanation: "选项A是按创制方式 and 表现形式划分；选项C是按空间、时间或对人效力划分；选项D是按内容划分。",
    source: "第3页"
  },
  {
    id: 3, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列规范性文件中，属于“行政法规”的是（ ）。",
    options: ["A. 国家税务总局发布的《税务登记管理办法》", "B. 国务院发布的《企业财务会计报告条例》", "C. 四川省人大常委会发布的《四川省会计管理条例》", "D. 全国人民代表大会通过的《中华人民共和国民法典》"],
    answer: "B", explanation: "行政法规由国务院制定（通常称条例）。选项A属于部门规章；选项C属于地方性法规；选项D属于法律。",
    source: "第4页"
  },
  {
    id: 4, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列主体中，有权制定“部门规章”的是（ ）。",
    options: ["A. 设区的市人民政府", "B. 中国人民银行", "C. 民族自治地方人民代表大会", "D. 省级人民政府财政部门"],
    answer: "B", explanation: "国务院各部委、中国人民银行、审计署等具有行政管理职能的直属机构有权制定部门规章。",
    source: "第4页"
  },
  {
    id: 5, type: QuestionType.MULTIPLE_CHOICE,
    title: "在法的效力冲突处理原则中，当“地方性法规”与“部门规章”不一致时，由（ ）提出意见。",
    options: ["A. 全国人大常委会", "B. 最高人民法院", "C. 国务院", "D. 地方人大常委会"],
    answer: "C", explanation: "地方性法规与部门规章不一致时，先由国务院提出意见。国务院认为适用地方性法规的，适用地方性法规；认为适用部门规章的，提请全国人大常委会裁决。",
    source: "第6页"
  },
  {
    id: 6, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列各项中，不享有我国选举权和被选举权的主体是（ ）。",
    options: ["A. 正在被执行刑罚的中国公民", "B. 在我国境内居住的外国公民", "C. 19周岁的中国大学生", "D. 退休后的中国公务员"],
    answer: "B", explanation: "外国人不能享有我国公民的某些权利，如选举权、被选举权、担任公职和服兵役等。",
    source: "第6页"
  },
  {
    id: 7, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列选项中，属于法律关系主体中“非法人组织”的是（ ）。",
    options: ["A. 个人独资企业", "B. 有限责任公司", "C. 某县政府", "D. 事业单位"],
    answer: "A", explanation: "非法人组织包括个人独资企业、合伙企业、不具有法人资格的专业服务机构。选项B是营利法人，C是特别法人，D是非营利法人。",
    source: "第11、12页"
  },
  {
    id: 8, type: QuestionType.MULTIPLE_CHOICE,
    title: "关于法人分支机构的表述中，正确的是（ ）。",
    options: ["A. 分支机构具有法人资格", "B. 分支机构产生的民事责任只能由法人承担", "C. 分支机构产生的民事责任可先以其管理的财产承担，不足部分由法人承担", "D. 分支机构不得以自己的名义从事民事活动"],
    answer: "C", explanation: "分支机构不具法人资格，但可以以自己名义从事活动，责任可先由其管理财产承担，不足由法人承担。",
    source: "第11页"
  },
  {
    id: 9, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列法律事实中，属于“法律行为”的是（ ）。",
    options: ["A. 张某的孩子出生", "B. 某地发生强烈地震", "C. 李某签发一张商业汇票", "D. 王某捡到一部手机"],
    answer: "C", explanation: "选项A、B属于法律事件；选项D属于事实行为；选项C是主体通过意思表示设立法律关系，属于法律行为。",
    source: "第9页"
  },
  {
    id: 10, type: QuestionType.MULTIPLE_CHOICE,
    title: "已满16周岁的人犯罪，应当负刑事责任。这种法律资格属于（ ）。",
    options: ["A. 刑事责任能力", "B. 民事行为能力", "C. 民事权利能力", "D. 行政处罚能力"],
    answer: "A", explanation: "已满16周岁的人犯罪，应当负刑事责任，这是关于刑事责任能力的规定。",
    source: "第15页"
  },
  {
    id: 11, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列刑事责任中，属于“附加刑”的是（ ）。",
    options: ["A. 管制", "B. 拘役", "C. 没收财产", "D. 有期徒刑"],
    answer: "C", explanation: "刑事责任主刑包括管制、拘役、有期、无期 and 死刑；附加刑包括罚金、剥夺政治权利、没收财产、驱逐出境。",
    source: "第19页"
  },
  {
    id: 12, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据法的渊源，下列各项中，由全国人民代表大会及其常务委员会制定的是（ ）。",
    options: ["A. 宪法", "B. 法律", "C. 行政法规", "D. 地方性法规"],
    answer: "B", explanation: "法律由全国人大及其常委会制定（如《民法典》、《增值税法》等）。选项A宪法由全国人大制定；选项C行政法规由国务院制定；选项D地方性法规由地方人大及其常委会制定。",
    source: "第3页"
  },
  {
    id: 13, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法的效力范围的表述中，正确的是（ ）。",
    options: ["A. 原则上新法具有溯及力", "B. 我国对人的效力采用“属人主义”原则", "C. 我国法律对人的效力采用以“属地主义”为主，与属人主义、保护主义相结合的原则", "D. 法律一律在全国范围内有效"],
    answer: "C", explanation: "选项A，原则上新法无溯及力（从旧兼从轻）；选项B，我国采用结合主义原则；选项D，法律效力范围包括全国范围、局部地区及域外效力。",
    source: "第5页"
  },
  {
    id: 14, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据法律关系的定义，下列选项中属于法律关系客体中的“物”的是（ ）。",
    options: ["A. 森林、矿藏", "B. 嘉奖、荣誉", "C. 智力成果", "D. 提供劳务的行为"],
    answer: "A", explanation: "选项A属于自然物，是“物”的一种。选项B属于人身、人格权利指向的客体；选项C属于智力成果；选项D属于“行为”。",
    source: "第8页"
  },
  {
    id: 15, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列法律事实中，属于“法律事件”中的“相对事件”的是（ ）。",
    options: ["A. 人的出生", "B. 台风登陆", "C. 战争、重大政策改变", "D. 意外事故"],
    answer: "C", explanation: "法律事件分为绝对事件和相对事件。选项A、B、D均由自然现象引起，属于绝对事件；选项C由社会现象引起，属于相对事件。",
    source: "第9页"
  },
  {
    id: 16, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于自然人民事权利能力的表述中，正确的是（ ）。",
    options: ["A. 自然人的民事权利能力始于出生，止于死亡", "B. 16周岁以上的自然人方具有民事权利能力", "C. 胎儿不享有任何民事权利能力", "D. 不同人的民事权利能力是不平等的"],
    answer: "A", explanation: "选项B，所有自然人出生即有权利能力；选项C，涉及遗产继承等利益保护时，胎儿视为具有权利能力；选项D，自然人的民事权利能力一律平等。",
    source: "第11、15页"
  },
  {
    id: 17, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据《民法典》规定，不满（ ）周岁的未成年人为无民事行为能力人。",
    options: ["A. 8", "B. 10", "C. 14", "D. 16"],
    answer: "A", explanation: "不满8周岁的未成年人为无民事行为能力人，由其法定代理人代理实施民事法律行为。",
    source: "第15页"
  },
  {
    id: 18, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于营利法人的表述中，正确的是（ ）。",
    options: ["A. 营利法人包括事业单位、社会团体", "B. 营利法人包括有限责任公司、股份有限公司", "C. 营利法人属于特别法人", "D. 营利法人不需要在银行开立账户"],
    answer: "B", explanation: "营利法人包括有限责任公司、股份有限公司和其他企业法人。选项A属于非营利法人。",
    source: "第11页"
  },
  {
    id: 19, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于行政处分的表述中，正确的是（ ）。",
    options: ["A. 行政处分适用于所有公民", "B. 行政处分包括罚款、行政拘留", "C. 行政处分包括警告、记过、记大过、降级、撤职、开除", "D. 行政处分由人民法院判决"],
    answer: "C", explanation: "行政处分适用于国家机关工作人员。选项B属于行政处罚；选项D行政处分通常由所在单位或监察机关作出。",
    source: "第19页"
  },
  {
    id: 20, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据刑事法律制度的规定，下列属于刑事责任“主刑”的是（ ）。",
    options: ["A. 罚金", "B. 剥夺政治权利", "C. 拘役", "D. 没收财产"],
    answer: "C", explanation: "主刑包括管制、拘役、有期徒刑、无期徒刑、死刑。选项A、B、D均属于附加刑。",
    source: "第19页"
  },
  {
    id: 21, type: QuestionType.MULTIPLE_CHOICE,
    title: "甲公司因违法经营被工商部门吊销营业执照。该法律后果属于（ ）。",
    options: ["A. 民事责任", "B. 行政处罚", "C. 行政处分", "D. 刑事责任"],
    answer: "B", explanation: "吊销许可证件（包括营业执照）属于行政责任中的行政处罚。",
    source: "第19页"
  },
  {
    id: 22, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据法的分类，根据法律运用的目的，法可以分为（ ）。",
    options: ["A. 成文法和不成文法", "B. 根本法和普通法", "C. 实体法和程序法", "D. 公法和私法"],
    answer: "D", explanation: "根据法律运用的目的划分，法分为公法 and 私法。",
    source: "第3页"
  },
  {
    id: 23, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列规范性法律文件中，效力等级最高的是（ ）。",
    options: ["A. 《中华人民共和国民法典》", "B. 《企业财务会计报告条例》", "C. 《中华人民共和国宪法》", "D. 《代理记账管理办法》"],
    answer: "C", explanation: "效力排序为：宪法 > 法律 > 行政法规 > 规章。宪法是国家根本大法，具有最高法律效力。",
    source: "第3、4页"
  },
  {
    id: 24, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列各项中，属于法律关系构成要素中的“内容”的是（ ）。",
    options: ["A. 森林、山岭", "B. 支付货款的义务", "C. 发明、专利", "D. 股份有限公司"],
    answer: "B", explanation: "法律关系的内容是指主体享有的权利和承担的义务。选项A、C属于客体；选项D属于主体。",
    source: "第7页"
  },
  {
    id: 25, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法律事实中“事实行为”的表述，正确的是（ ）。",
    options: ["A. 事实行为以意思表示为核心", "B. 事实行为与主体的意思表示无关", "C. 签发支票属于事实行为", "D. 订立合同属于事实行为"],
    answer: "B", explanation: "事实行为与主体的意思表示无关，由法律直接规定后果（如拾得遗失物、侵权行为）。选项C、D属于法律行为。",
    source: "第9页"
  },
  {
    id: 26, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列主体中，属于“特别法人”的是（ ）。",
    options: ["A. 某公立大学", "B. 某有限责任公司", "C. 某基金会", "D. 某村民委员会"],
    answer: "D", explanation: "特别法人包括机关法人、农村集体经济组织法人、基层群众性自治组织法人（如村委会、居委会）。",
    source: "第11页"
  },
  {
    id: 27, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列自然人中，属于“限制民事行为能力人”的是（ ）。",
    options: ["A. 15周岁的在校中学生", "B. 17周岁以自己劳动收入为主要生活来源的木工", "C. 5周岁的小学生", "D. 20周岁且精神状态正常的大学生"],
    answer: "A", explanation: "8周岁以上未成年人为限制民事行为能力人。选项B视为完全民事行为能力人；选项C为无民事行为能力人；选项D为完全民事行为能力人。",
    source: "第15页"
  },
  {
    id: 28, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法人注销登记的说法中，正确的是（ ）。",
    options: ["A. 清算结束时，法人即告终止", "B. 法人被吊销营业执照后，其法人资格立即消失", "C. 清算结束并完成法人注销登记时，法人终止", "D. 清算期间法人不得从事任何活动"],
    answer: "C", explanation: "清算结束并完成注销登记时，法人终止。清算期间法人存续，但不得从事与清算无关的活动。",
    source: "第12页"
  },
  {
    id: 29, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列法律责任中，属于“民事责任”的是（ ）。",
    options: ["A. 暂扣许可证件", "B. 恢复原状", "C. 罚款", "D. 没收非法财物"],
    answer: "B", explanation: "恢复原状属于民事责任。选项A、C、D均属于行政处罚。",
    source: "第19页"
  },
  {
    id: 30, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据刑事法律制度，拘役的期限通常为（ ）。",
    options: ["A. 1个月以上6个月以下", "B. 3个月以上2年以下", "C. 6个月以上15年以下", "D. 1个月以上1年以下"],
    answer: "A", explanation: "拘役期限为1个月以上6个月以下。选项B为管制期限；选项C为有期徒刑期限。",
    source: "第19页"
  },
  {
    id: 31, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法的渊源的表述中，不正确的是（ ）。",
    options: ["A. 自治条例和单行条例属于法的渊源", "B. 国际条约属于法的渊源", "C. 判决书不属于法的渊源", "D. 部门规章由地方人大常委会制定"],
    answer: "D", explanation: "部门规章由国务院各部委行署制定。",
    source: "第3、4页"
  },
  {
    id: 32, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列法律事实中，属于“相对事件”的是（ ）。",
    options: ["A. 海啸", "B. 战争", "C. 疾病死亡", "D. 火山爆发"],
    answer: "B", explanation: "相对事件属于由社会现象引起的法律事件。选项A、C、D属于自然现象引起的绝对事件。",
    source: "第9页"
  },
  {
    id: 33, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法人合并和分立的表述，正确的是（ ）。",
    options: ["A. 法人分立后，原权利义务由原股东承担", "B. 法人合并的，其权利义务由合并后的法人享有和承担", "C. 法人分立的，债权人和债务人不能另有约定", "D. 法人分立后，原法人的债务由分立后的法人按出资额承担"],
    answer: "B", explanation: "合并后的法人享有原权利义务。分立后的法人享有连带债权并承担连带债务，另有约定的除外。",
    source: "第11页"
  },
  {
    id: 34, type: QuestionType.MULTIPLE_CHOICE,
    title: "13周岁的少年犯故意杀人罪，应当承担刑事责任的法定条件是（ ）。",
    options: ["A. 经最高人民检察院核准追诉", "B. 经最高人民法院核准追诉", "C. 经省级人民检察院核准追诉", "D. 无须任何核准直接承担"],
    answer: "A", explanation: "12周岁以上不满14周岁犯故意杀人、故意伤害致死等，需经最高人民检察院核准追诉方负刑事责任。",
    source: "第15页"
  },
  {
    id: 35, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列各项中，属于行政责任中“行政处分”的是（ ）。",
    options: ["A. 警告", "B. 吊销许可证", "C. 记大过", "D. 罚款"],
    answer: "C", explanation: "选项A虽然在处分和处罚中都有，但在行政处分中“记大过、撤职”是典型形式。行政处分包括警告、记过、记大过、降级、撤职、开除。",
    source: "第19页"
  },
  {
    id: 36, type: QuestionType.MULTIPLE_CHOICE,
    title: "已满75周岁的人故意犯罪的，法律规定的处罚原则是（ ）。",
    options: ["A. 应当减轻处罚", "B. 可以从轻或者减轻处罚", "C. 应当免除处罚", "D. 应当从轻处罚"],
    answer: "B", explanation: "已满75周岁的人故意犯罪，可以从轻或者减轻处罚；过失犯罪，应当从轻或者减轻处罚。",
    source: "第15页"
  },
  {
    id: 37, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列选项中，不属于法律关系客体中的“智力成果”的是（ ）。",
    options: ["A. 发明专利", "B. 商业秘密", "C. 文学作品", "D. 计算机软件"],
    answer: "B", explanation: "商业秘密属于法律关系客体中的“信息、数据、网络虚拟财产”。",
    source: "第8页"
  },
  {
    id: 38, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列情形中，属于法人应当解散的情形是（ ）。",
    options: ["A. 法人被宣告破产", "B. 法人权力机构决议解散", "C. 法人因分立需要终止", "D. 法人因合并需要终止"],
    answer: "B", explanation: "权力机构决议解散属于解散的情形。选项A属于法人终止的情形（非解散原因）。",
    source: "第12页"
  },
  {
    id: 39, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于刑事责任附加刑的表述中，正确的是（ ）。",
    options: ["A. 附加刑只能附加主刑适用", "B. 附加刑不能独立适用", "C. 附加刑既能附加主刑适用，又可以独立适用", "D. 数罪中有判处附加刑的，不需执行"],
    answer: "C", explanation: "附加刑既可以附加于主刑适用，也可以独立适用。",
    source: "第19页"
  },
  {
    id: 40, type: QuestionType.MULTIPLE_CHOICE,
    title: "孙某向乙餐厅订购外卖，外卖员配送过程中发生交通事故。关于该买卖合同法律关系的主体，下列表述正确的是（ ）。",
    options: ["A. 外卖员是合同主体", "B. 乙餐厅是合同主体", "C. 交通事故本身是合同主体", "D. 只有孙某是主体"],
    answer: "B", explanation: "买卖合同的主体是孙某（买方）和乙餐厅（卖方）。外卖员是配送人员，不是合同当事人。",
    source: "第7、8页"
  },
  {
    id: 41, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据法律关系客体分类，空气、阳光通常不作为法律关系客体，原因是（ ）。",
    options: ["A. 不具有经济价值", "B. 不具有有用性", "C. 无法被人支配", "D. 不属于物"],
    answer: "C", explanation: "作为法律关系客体的“物”，需具备为人类所控制和支配的特征。",
    source: "第8页"
  },
  {
    id: 42, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列规范性文件中，属于地方政府规章的是（ ）。",
    options: ["A. 《北京市交易场所管理办法》", "B. 《上海市生活垃圾管理条例》", "C. 《中华人民共和国会计法》", "D. 《企业会计准则——基本准则》"],
    answer: "A", explanation: "地方政府规章由地方人民政府制定，通常称“办法”。选项B为地方性法规；选项C为法律；选项D为部门规章。",
    source: "第4页"
  },
  {
    id: 43, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法的时间效力的说法，错误的是（ ）。",
    options: ["A. 法律一般规定明确的生效时间", "B. 法律终止效力包括明示废止 and 默示废止", "C. 原则上法律具有溯及力", "D. 新法对行为人处罚较轻时适用新法"],
    answer: "C", explanation: "原则上新法无溯及力（从旧兼从轻原则）。",
    source: "第5页"
  },
  {
    id: 44, type: QuestionType.MULTIPLE_CHOICE,
    title: "自然人以户籍登记的居所为住所。经常居所与住所不一致时，法律规定（ ）。",
    options: ["A. 以户籍登记地为准", "B. 经常居所视为住所", "C. 由法院指定住所", "D. 住所为无效"],
    answer: "B", explanation: "经常居所与住所不一致的，经常居所视为住所。",
    source: "第11页"
  },
  {
    id: 45, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于非法人组织债务承担的表述，正确的是（ ）。",
    options: ["A. 非法人组织独立承担民事责任", "B. 非法人组织出资人承担有限责任", "C. 非法人组织财产不足以清偿债务的，其出资人承担无限责任", "D. 只有合伙企业才需承担无限责任"],
    answer: "C", explanation: "非法人组织财产不足清偿债务时，其出资人或设立人承担无限责任。",
    source: "第12页"
  },
  {
    id: 46, type: QuestionType.MULTIPLE_CHOICE,
    title: "醉酒的人犯罪，法律规定（ ）。",
    options: ["A. 不负刑事责任", "B. 应当负刑事责任", "C. 可以从轻处罚", "D. 应当减轻处罚"],
    answer: "B", explanation: "醉酒的人犯罪，应当负刑事责任。",
    source: "第15页"
  },
  {
    id: 47, type: QuestionType.MULTIPLE_CHOICE,
    title: "剥夺政治权利不包括剥夺（ ）。",
    options: ["A. 选举权和被选举权", "B. 言论、出版、结社自由", "C. 担任国家机关职务的权利", "D. 人身自由权利"],
    answer: "D", explanation: "剥夺政治权利内容包括选举、自由权、担任职务权等。人身自由不属于其范畴。",
    source: "第19页"
  },
  {
    id: 48, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列属于民事法律关系主体中“国家”作为特殊主体参加的情形是（ ）。",
    options: ["A. 购买办公用品", "B. 发行国债", "C. 征收税款", "D. 支付公务员工资"],
    answer: "B", explanation: "在国债发行等法律关系中，国家可以作为民事主体参加。",
    source: "第7、11页"
  },
  {
    id: 49, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于刑事责任主刑“管制”的期限，最高不超过（ ）。",
    options: ["A. 1年", "B. 2年", "C. 3年", "D. 5年"],
    answer: "C", explanation: "管制的期限为3个月以上2年以下；数罪并罚最高不超过3年。",
    source: "第19页"
  },
  {
    id: 50, type: QuestionType.MULTIPLE_CHOICE,
    title: "某法院在审理案件时查明，某省人大制定的条例与财政部规章不一致，应（ ）。",
    options: ["A. 适用财政部规章", "B. 适用省人大条例", "C. 提请最高人民法院裁决", "D. 由国务院提出意见"],
    answer: "D", explanation: "地方性法规与部门规章不一致时，由国务院提出意见。",
    source: "第6页"
  },
  {
    id: 51, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列关于法律渊源效力层级的表述中，正确的是（ ）。",
    options: ["A. 法律效力高于宪法", "B. 行政法规效力高于法律", "C. 地方性法规效力高于规章", "D. 规章效力高于行政法规"],
    answer: "C", explanation: "效力层级：宪法 > 法律 > 行政法规 > 地方性法规 > 本级和下级地方政府规章。",
    source: "第5页"
  },
  {
    id: 52, type: QuestionType.MULTIPLE_CHOICE,
    title: "甲、乙双方签订一份房屋买卖合同，由此形成的法律关系客体是（ ）。",
    options: ["A. 房屋", "B. 甲和乙", "C. 房屋买卖的行为", "D. 支付房款"],
    answer: "A", explanation: "在房屋买卖合同关系中，客体是“房屋”（物）。",
    source: "第8页"
  },
  {
    id: 53, type: QuestionType.MULTIPLE_CHOICE,
    title: "根据法律事实的分类，由于自然灾害导致的合同解除属于（ ）。",
    options: ["A. 法律行为", "B. 法律事件", "C. 事实行为", "D. 相对事件"],
    answer: "B", explanation: "自然灾害属于自然现象引起的法律事件（绝对事件）。",
    source: "第9页"
  },
  {
    id: 54, type: QuestionType.MULTIPLE_CHOICE,
    title: "16周岁的学生小王通过打工获得收入并能维持当地一般生活水平，小王属于（ ）。",
    options: ["A. 无民事行为能力人", "B. 限制民事行为能力人", "C. 完全民事行为能力人", "D. 视为无民事行为能力人"],
    answer: "C", explanation: "16周岁以上未成年人，以自己劳动收入为主要生活来源的，视为完全民事行为能力人。",
    source: "第15页"
  },
  {
    id: 55, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列组织中，属于“非营利法人”的是（ ）。",
    options: ["A. 某股份有限公司", "B. 某合伙企业", "C. 某红十字会", "D. 某乡镇政府"],
    answer: "C", explanation: "非营利法人包括事业单位、社会团体、基金会等。红十字会是社会团体，属于非营利法人。",
    source: "第11页"
  },
  {
    id: 56, type: QuestionType.MULTIPLE_CHOICE,
    title: "关于法人权利能力和行为能力的表述，正确的是（ ）。",
    options: ["A. 法人的权利能力始于成立，终于注销", "B. 法人的权利能力早于其行为能力产生", "C. 法人的行为能力通过其法定代表人实现", "D. 法人不必承担其法定代表人以法人名义从事的民事行为的后果"],
    answer: "C", explanation: "法人的权利能力与行为能力同时产生、同时消灭。其行为能力通过法定代表人 or 权力机构实现。",
    source: "第12页"
  },
  {
    id: 57, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列纠纷中，可以适用《仲裁法》解决的是（ ）。",
    options: ["A. 婚姻纠纷", "B. 收养纠纷", "C. 合同纠纷", "D. 监护纠纷"],
    answer: "C", explanation: "人身关系纠纷（婚姻、收养等）不能仲裁。",
    source: "第20页"
  },
  {
    id: 58, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列刑事责任主刑中，期限为6个月以上15年以下的是（ ）。",
    options: ["A. 管制", "B. 拘役", "C. 有期徒刑", "D. 无期徒刑"],
    answer: "C", explanation: "有期徒刑期限通常为6个月以上15年以下。",
    source: "第19页"
  },
  {
    id: 59, type: QuestionType.MULTIPLE_CHOICE,
    title: "剥夺政治权利的期限，除被判处死刑和无期徒刑的外，一般为（ ）。",
    options: ["A. 6个月以上5年以下", "B. 1年以上5年以下", "C. 3个月以上2年以下", "D. 1个月以上6个月以下"],
    answer: "B", explanation: "剥夺政治权利期限一般为1年以上5年以下。",
    source: "第19页"
  },
  {
    id: 60, type: QuestionType.MULTIPLE_CHOICE,
    title: "下列属于法律关系主体中的“非法人组织”的是（ ）。",
    options: ["A. 分公司", "B. 某大学", "C. 某基金会", "D. 某行政机关"],
    answer: "A", explanation: "非法人组织包括个人独资企业、合伙企业、不具有法人资格的专业服务机构等。分支机构（分公司）也属于非法人组织。",
    source: "第11页"
  },
  // 填空题 61-100
  {
    id: 61, type: QuestionType.FILL_IN,
    title: "法体现的是统治阶级的“国家意志”，这种意志是由统治阶级的__________决定的。",
    answer: "物质生活条件",
    explanation: "法的本质受社会客观物质条件的制约。",
    source: "第 2 页"
  },
  {
    id: 62, type: QuestionType.FILL_IN,
    title: "根据法的内容划分，法可分为__________和程序法。",
    answer: "实体法",
    explanation: "实体法规定权利义务，程序法规定行使权利、履行义务的程序。",
    source: "第 3 页"
  },
  {
    id: 63, type: QuestionType.FILL_IN,
    title: "国务院各部委发布的《办法》、《准则》等规范性文件属于__________。",
    answer: "部门规章",
    explanation: "各部委行署在权限范围内制定的为部门规章。",
    source: "第 4 页"
  },
  {
    id: 64, type: QuestionType.FILL_IN,
    title: "法律之间对同一事项的新的一般规定与旧的特别规定不一致，不能确定如何适用时，由__________裁决。",
    answer: "全国人民代表大会常务委员会",
    explanation: "法律的最高解释权和冲突裁决权归全国人大常委会。",
    source: "第 6 页"
  },
  {
    id: 65, type: QuestionType.FILL_IN,
    title: "法律关系主体中，自然人以户籍登记或其他有效身份登记记载的居所为住所；经常居所与住所不一致的，__________视为住所。",
    answer: "经常居所",
    explanation: "法律以经常居所作为确认自然人位置的优先标准。",
    source: "第 11 页"
  },
  {
    id: 66, type: QuestionType.FILL_IN,
    title: "事业单位、社会团体、基金会、社会服务机构等属于__________法人。",
    answer: "非营利",
    explanation: "这些组织不以营利为目的。",
    source: "第 11 页"
  },
  {
    id: 67, type: QuestionType.FILL_IN,
    title: "法人的__________以法人名义从事的民事活动，其法律后果由法人承担。",
    answer: "法定代表人",
    explanation: "法定代表人代表法人执行职务。",
    source: "第 11 页"
  },
  {
    id: 68, type: QuestionType.FILL_IN,
    title: "法人章程或者法人权力机构对法定代表人代表权的限制，不得对抗__________。",
    answer: "善意相对人",
    explanation: "为了保护交易安全，内部限制不得影响外部不知情的第三人。",
    source: "第 11 页"
  },
  {
    id: 69, type: QuestionType.FILL_IN,
    title: "清算期间法人存续，但是不得从事与__________无关的活动。",
    answer: "清算",
    explanation: "法人清算期间其行为能力受到限制。",
    source: "第 12 页"
  },
  {
    id: 70, type: QuestionType.FILL_IN,
    title: "法律事实包括法律事件、法律行为和__________。",
    answer: "事实行为",
    explanation: "事实行为是不以意思表示为要素但能引起法律后果的行为。",
    source: "第 9 页"
  },
  {
    id: 71, type: QuestionType.FILL_IN,
    title: "16周岁以上不满18周岁的未成年人，以__________为主要生活来源的，视为完全民事行为能力人。",
    answer: "自己的劳动收入",
    explanation: "这是民法典对劳动少年的一种法律保护。",
    source: "第 15 页"
  },
  {
    id: 72, type: QuestionType.FILL_IN,
    title: "__________是指法律赋予自然人享有民事权利、承担民事义务的资格。",
    answer: "民事权利能力",
    explanation: "权利能力是资格，行为能力是能否亲自通过行为行使权利。",
    source: "第 15 页"
  },
  {
    id: 73, type: QuestionType.FILL_IN,
    title: "已满12周岁不满14周岁的人犯罪，致人死亡或者以特别残忍手段致人重伤，经__________核准追诉的，应当负刑事责任。",
    answer: "最高人民检察院",
    explanation: "这是刑事责任年龄下调后的法定核准程序。",
    source: "第 15 页"
  },
  {
    id: 74, type: QuestionType.FILL_IN,
    title: "又聋又哑的人或者盲人犯罪，可以__________、减轻或者免除处罚。",
    answer: "从轻",
    explanation: "体现了法律对残疾人的特殊考量。",
    source: "第 15 页"
  },
  {
    id: 75, type: QuestionType.FILL_IN,
    title: "民事责任承担方式中，强调责任目的具有__________性。",
    answer: "补偿",
    explanation: "民事责任以弥补受害人损失为首要目的。",
    source: "第 19 页"
  },
  {
    id: 76, type: QuestionType.FILL_IN,
    title: "行政责任包括行政处罚和__________两类。",
    answer: "行政处分",
    explanation: "行政处罚针对外部相对人，行政处分针对内部人员。",
    source: "第 19 页"
  },
  {
    id: 77, type: QuestionType.FILL_IN,
    title: "剥夺政治权利属于刑事责任中的__________刑。",
    answer: "附加",
    explanation: "附加刑可以独立适用，也可以附加适用。",
    source: "第 19 页"
  },
  {
    id: 78, type: QuestionType.FILL_IN,
    title: "刑事责任主刑中，__________是指判处不关押在监狱，由社区矫正机构负责。",
    answer: "管制",
    explanation: "管制是最轻的主刑。",
    source: "第 19 页"
  },
  {
    id: 79, type: QuestionType.FILL_IN,
    title: "一人犯数罪，除判处死刑和无期徒刑外，应当在总和刑期以下、__________刑期以上，酌情决定执行的刑罚。",
    answer: "数刑中最高",
    explanation: "这是数罪并罚的基本原则。",
    source: "第 19 页"
  },
  {
    id: 80, type: QuestionType.FILL_IN,
    title: "死刑缓期执行的期限通常为__________年。",
    answer: "2",
    explanation: "死缓给予犯罪分子改过自新的机会。",
    source: "第 19 页"
  },
  {
    id: 81, type: QuestionType.FILL_IN,
    title: "法的特征包括：国家意志性、国家强制性、规范性和明确公开性及__________。",
    answer: "普遍约束性",
    explanation: "法律面前人人平等。",
    source: "第 2 页"
  },
  {
    id: 82, type: QuestionType.FILL_IN,
    title: "根据法的主体、调整对象和渊源划分，法可以分为__________和国内法。",
    answer: "国际法",
    explanation: "这是法的六大分类标准之一。",
    source: "第 3 页"
  },
  {
    id: 83, type: QuestionType.FILL_IN,
    title: "法律关系的发生、变更和消灭的直接原因是__________。",
    answer: "法律事实",
    explanation: "法律事实的存在是引起法律关系变动的根本。",
    source: "第 8 页"
  },
  {
    id: 84, type: QuestionType.FILL_IN,
    title: "法律行为按表现形式不同，分为积极行为（作为）和__________（不作为）。",
    answer: "消极行为",
    explanation: "不作为也是一种法律上的选择。",
    source: "第 9 页"
  },
  {
    id: 85, type: QuestionType.FILL_IN,
    title: "法律主体中的“国家”在某些特定场合（如发行国债）可以作为__________主体参加。",
    answer: "法律",
    explanation: "国家是特殊的法律主体。",
    source: "第 11 页"
  },
  {
    id: 86, type: QuestionType.FILL_IN,
    title: "机关法人、农村集体经济组织法人等属于__________。",
    answer: "特别法人",
    explanation: "这类法人的成立和职能具有特殊性。",
    source: "第 11 页"
  },
  {
    id: 87, type: QuestionType.FILL_IN,
    title: "法人终止的原因包括解散、被宣告破产以及__________。",
    answer: "法律规定的其他原因",
    explanation: "解散是终止的原因之一。",
    source: "第 12 页"
  },
  {
    id: 88, type: QuestionType.FILL_IN,
    title: "依法不需要办理法人登记的，__________结束时，法人终止。",
    answer: "清算",
    explanation: "这是针对非登记类法人的特殊规定。",
    source: "第 12 页"
  },
  {
    id: 89, type: QuestionType.FILL_IN,
    title: "__________是不具有法人资格，但能够依法以自己的名义从事民事活动的组织。",
    answer: "非法人组织",
    explanation: "如合伙企业等。",
    source: "第 12 页"
  },
  {
    id: 90, type: QuestionType.FILL_IN,
    title: "限制民事行为能力人独立实施的与其年龄不相适应的民事法律行为，经法定代理人__________后有效。",
    answer: "同意或追认",
    explanation: "这是民事法律行为效力的补正。",
    source: "第 16 页"
  },
  {
    id: 91, type: QuestionType.FILL_IN,
    title: "法律主体中的自然人包括中国公民、外国公民和__________。",
    answer: "无国籍人",
    explanation: "只要是有生命的个人都是自然人。",
    source: "第 11 页"
  },
  {
    id: 92, type: QuestionType.FILL_IN,
    title: "主刑“拘役”的期限为__________。",
    answer: "1个月以上6个月以下",
    explanation: "拘役属于短期剥夺自由的刑罚。",
    source: "第 19 页"
  },
  {
    id: 93, type: QuestionType.FILL_IN,
    title: "行政责任中，“吊销许可证件”属于__________。",
    answer: "行政处罚",
    explanation: "这是对违法相对人资格的剥夺。",
    source: "第 19 页"
  },
  {
    id: 94, type: QuestionType.FILL_IN,
    title: "附加刑“罚金”与“没收财产”的主要区别在于，罚金由__________缴纳。",
    answer: "犯罪分子",
    explanation: "罚金通常是金钱，没收财产包括具体财物。",
    source: "第 19 页"
  },
  {
    id: 95, type: QuestionType.FILL_IN,
    title: "法的分类中，根本法通常指__________。",
    answer: "宪法",
    explanation: "对应普通法。",
    source: "第 3 页"
  },
  {
    id: 96, type: QuestionType.FILL_IN,
    title: "法律关系的三个要素是：主体、内容和__________。",
    answer: "客体",
    explanation: "三者缺一不可。",
    source: "第 7 页"
  },
  {
    id: 97, type: QuestionType.FILL_IN,
    title: "在民事法律行为中，支付违约金属于__________责任承担方式。",
    answer: "民事",
    explanation: "用于违反约定的赔偿。",
    source: "第 19 页"
  },
  {
    id: 98, type: QuestionType.FILL_IN,
    title: "法律强制性表现为，法是凭借__________保证获得的效力。",
    answer: "国家强制力",
    explanation: "这是法律区别于道德的重要特征。",
    source: "第 2 页"
  },
  {
    id: 99, type: QuestionType.FILL_IN,
    title: "部门规章之间、部门规章与地方政府规章不一致时，由__________裁决。",
    answer: "国务院",
    explanation: "同级政府部门间的冲突由其上级国务院裁决。",
    source: "第 6 页"
  },
  {
    id: 100, type: QuestionType.FILL_IN,
    title: "已满75周岁的人过失犯罪的，__________从轻或者减轻处罚。",
    answer: "应当",
    explanation: "注意“应当”与“可以”的区别。",
    source: "第 15 页"
  },
  // 判断题 101-150
  {
    id: 101, type: QuestionType.TRUE_FALSE,
    title: "法体现的是全社会成员的共同意志。",
    answer: "×",
    explanation: "法体现的是统治阶级的意志。",
    source: "第 2 页"
  },
  {
    id: 102, type: QuestionType.TRUE_FALSE,
    title: "自然人的民事行为能力与民事权利能力是同时产生的。",
    answer: "×",
    explanation: "权利能力出生就有，行为能力通常需要达到一定年龄或精神状态。",
    source: "第 17 页"
  },
  {
    id: 103, type: QuestionType.TRUE_FALSE,
    title: "判决书是我国法律渊源的一种。",
    answer: "×",
    explanation: "我国不实行判例制度，判决书不属于法的渊源。",
    source: "第 4 页"
  },
  {
    id: 104, type: QuestionType.TRUE_FALSE,
    title: "分公司具有法人资格，可以独立承担民事责任。",
    answer: "×",
    explanation: "分公司不具有法人资格，民事责任最终由法人承担。",
    source: "第 11 页"
  },
  {
    id: 105, type: QuestionType.TRUE_FALSE,
    title: "限制民事行为能力人实施的纯获利益的行为有效。",
    answer: "√",
    explanation: "纯获利益的行为（如接受赠与）不需要法定代理人追认。",
    source: "第 16 页"
  },
  {
    id: 106, type: QuestionType.TRUE_FALSE,
    title: "法由统治阶级的物质生活条件所决定。",
    answer: "√",
    explanation: "法的本质特征之一。",
    source: "第 2 页"
  },
  {
    id: 107, type: QuestionType.TRUE_FALSE,
    title: "成文法和不成文法是根据法律内容划分的。",
    answer: "×",
    explanation: "是根据法的创制方式 and 表现形式划分的。",
    source: "第 3 页"
  },
  {
    id: 108, type: QuestionType.TRUE_FALSE,
    title: "法律事实包括法律事件和法律行为。",
    answer: "√",
    explanation: "广义的法律事实包括事件 and 行为。",
    source: "第 9 页"
  },
  {
    id: 109, type: QuestionType.TRUE_FALSE,
    title: "法人被宣告破产的，清算结束时法人终止。",
    answer: "×",
    explanation: "完成法人注销登记时才终止。",
    source: "第 12 页"
  },
  {
    id: 110, type: QuestionType.TRUE_FALSE,
    title: "设立人为设立法人以自己名义从事活动产生的责任，法人成立后，第三人有权选择请求法人或者设立人承担。",
    answer: "√",
    explanation: "这是对善意第三人的保护。",
    source: "第 13 页"
  },
  {
    id: 111, type: QuestionType.TRUE_FALSE,
    title: "行政处分包括罚款和没收违法所得。",
    answer: "×",
    explanation: "罚款属于行政处罚。",
    source: "第 19 页"
  },
  {
    id: 112, type: QuestionType.TRUE_FALSE,
    title: "拘役的期限为1个月以上6个月以下。",
    answer: "√",
    explanation: "法律规定期限。",
    source: "第 19 页"
  },
  {
    id: 113, type: QuestionType.TRUE_FALSE,
    title: "刑事责任中，附加刑可以独立适用。",
    answer: "√",
    explanation: "附加刑特征。",
    source: "第 19 页"
  },
  {
    id: 114, type: QuestionType.TRUE_FALSE,
    title: "法人章程对法定代表人的限制可以对抗所有第三人。",
    answer: "×",
    explanation: "不得对抗善意相对人。",
    source: "第 11 页"
  },
  {
    id: 115, type: QuestionType.TRUE_FALSE,
    title: "醉酒的人犯罪，不负刑事责任。",
    answer: "×",
    explanation: "应当负刑事责任。",
    source: "第 15 页"
  },
  {
    id: 116, type: QuestionType.TRUE_FALSE,
    title: "已满16周岁的人犯罪，应当负刑事责任。",
    answer: "√",
    explanation: "完全刑事责任年龄。",
    source: "第 15 页"
  },
  {
    id: 117, type: QuestionType.TRUE_FALSE,
    title: "民事责任承担方式具有补偿性。",
    answer: "√",
    explanation: "民事责任核心目的。",
    source: "第 19 页"
  },
  {
    id: 118, type: QuestionType.TRUE_FALSE,
    title: "又聋又哑的人犯罪，应当免除处罚。",
    answer: "×",
    explanation: "是可以从轻、减轻或免除，不是应当。",
    source: "第 15 页"
  },
  {
    id: 119, type: QuestionType.TRUE_FALSE,
    title: "法律关系的客体必须具有有用性。",
    answer: "√",
    explanation: "客体必须能满足主体需求。",
    source: "第 8 页"
  },
  {
    id: 120, type: QuestionType.TRUE_FALSE,
    title: "法律行为按主体实际参与状态分为自主行为和代理行为。",
    answer: "√",
    explanation: "分类标准之一。",
    source: "第 9 页"
  },
  {
    id: 121, type: QuestionType.TRUE_FALSE,
    title: "法的强制性由国家强制力保证执行。",
    answer: "√",
    explanation: "法的基本特征。",
    source: "第 2 页"
  },
  {
    id: 122, type: QuestionType.TRUE_FALSE,
    title: "宪法是国家的根本大法，普通法不得同宪法相抵触。",
    answer: "√",
    explanation: "上位法优于下位法。",
    source: "第 5 页"
  },
  {
    id: 123, type: QuestionType.TRUE_FALSE,
    title: "新法优于旧法原则适用于《民法典》优于《民法通则》。",
    answer: "√",
    explanation: "同机关制定的新法替代旧法。",
    source: "第 5 页"
  },
  {
    id: 124, type: QuestionType.TRUE_FALSE,
    title: "外卖员冯某送餐，他是该外卖买卖合同的主体。",
    answer: "×",
    explanation: "主体是买方孙某 and 卖方餐厅，外卖员只是履行合同的工具人/代理实施者。",
    source: "第 7 页"
  },
  {
    id: 125, type: QuestionType.TRUE_FALSE,
    title: "活人的身体整体可以视为法律上的“物”。",
    answer: "×",
    explanation: "禁止将整个身体转让，只有部分离体可为客体。",
    source: "第 8 页"
  },
  {
    id: 126, type: QuestionType.TRUE_FALSE,
    title: "个人信息和网络虚拟财产属于法律关系的客体。",
    answer: "√",
    explanation: "现代法律新增客体范畴。",
    source: "第 8 页"
  },
  {
    id: 127, type: QuestionType.TRUE_FALSE,
    title: "由于台风导致交通中断，属于法律行为。",
    answer: "×",
    explanation: "属于法律事件中的绝对事件。",
    source: "第 8 页"
  },
  {
    id: 128, type: QuestionType.TRUE_FALSE,
    title: "自然人从出生时起到死亡时止，享有民事权利。",
    answer: "√",
    explanation: "权利能力贯穿始终。",
    source: "第 17 页"
  },
  {
    id: 129, type: QuestionType.TRUE_FALSE,
    title: "个人独资企业以个人全部财产承担民事责任。",
    answer: "√",
    explanation: "无限责任的体现。",
    source: "第 14 页"
  },
  {
    id: 130, type: QuestionType.TRUE_FALSE,
    title: "机关法人被撤销，没有继任法人的，由其上级机关法人享有债权。",
    answer: "×",
    explanation: "由作出撤销决定的机关法人享有。",
    source: "第 14 页"
  },
  {
    id: 131, type: QuestionType.TRUE_FALSE,
    title: "国家机关可以以单位会员身份加入所有社会团体。",
    answer: "×",
    explanation: "国家机关以外的组织可以加入。",
    source: "第 14 页"
  },
  {
    id: 132, type: QuestionType.TRUE_FALSE,
    title: "已满75周岁的人故意犯罪，可以从轻或者减轻处罚。",
    answer: "√",
    explanation: "刑法宽严相济政策。",
    source: "第 15 页"
  },
  {
    id: 133, type: QuestionType.TRUE_FALSE,
    title: "剥夺政治权利不包括担任国有公司领导职务的权利。",
    answer: "×",
    explanation: "明确包括担任国有公司、事业单位领导职务的权利。",
    source: "第 19 页"
  },
  {
    id: 134, type: QuestionType.TRUE_FALSE,
    title: "无民事行为能力人独立实施的民事法律行为一律无效。",
    answer: "√",
    explanation: "必须由法定代理人代理实施。",
    source: "第 16 页"
  },
  {
    id: 135, type: QuestionType.TRUE_FALSE,
    title: "行政责任可协商，民事责任不可协商。",
    answer: "×",
    explanation: "民事责任可协商，行政责任不可协商。",
    source: "第 19 页"
  },
  {
    id: 136, type: QuestionType.TRUE_FALSE,
    title: "没收财产属于刑事责任中的主刑。",
    answer: "×",
    explanation: "属于附加刑。",
    source: "第 19 页"
  },
  {
    id: 137, type: QuestionType.TRUE_FALSE,
    title: "罚款和罚金是一回事。",
    answer: "×",
    explanation: "罚款是行政责任，罚金是刑事责任。",
    source: "第 19 页"
  },
  {
    id: 138, type: QuestionType.TRUE_FALSE,
    title: "全国人大代表大会是国家最高立法机关。",
    answer: "√",
    explanation: "法的渊源部分说明。",
    source: "第 3 页"
  },
  {
    id: 139, type: QuestionType.TRUE_FALSE,
    title: "自治条例和单行条例不属于法的渊源。",
    answer: "×",
    explanation: "它们属于其他法的渊源。",
    source: "第 4 页"
  },
  {
    id: 140, type: QuestionType.TRUE_FALSE,
    title: "一般法优于特别法。",
    answer: "×",
    explanation: "特别法优于一般法。",
    source: "第 5 页"
  },
  {
    id: 141, type: QuestionType.TRUE_FALSE,
    title: "人身、人格权利指向的客体包括生命权和姓名权。",
    answer: "√",
    explanation: "人身权 and 人格权客体内容。",
    source: "第 8 页"
  },
  {
    id: 142, type: QuestionType.TRUE_FALSE,
    title: "生产经营行为可以作为法律关系的客体。",
    answer: "√",
    explanation: "行为作为客体的例子。",
    source: "第 8 页"
  },
  {
    id: 143, type: QuestionType.TRUE_FALSE,
    title: "意外事故属于法律事件中的相对事件。",
    answer: "×",
    explanation: "属于绝对事件。",
    source: "第 9 页"
  },
  {
    id: 144, type: QuestionType.TRUE_FALSE,
    title: "非法人组织的财产足以清偿债务的，不需要出资人承担责任。",
    answer: "√",
    explanation: "只有不足时才由出资人承担无限责任。",
    source: "第 12 页"
  },
  {
    id: 145, type: QuestionType.TRUE_FALSE,
    title: "未成年人一律是限制民事行为能力人。",
    answer: "×",
    explanation: "不满8岁是无行为能力，16岁以上靠自己劳动生活是完全行为能力。",
    source: "第 15 页"
  },
  {
    id: 146, type: QuestionType.TRUE_FALSE,
    title: "醉酒的人犯罪可以从轻处罚。",
    answer: "×",
    explanation: "应当负刑责，法律未规定可以从轻。",
    source: "第 17 页"
  },
  {
    id: 147, type: QuestionType.TRUE_FALSE,
    title: "消除影响、恢复名誉属于行政处罚。",
    answer: "×",
    explanation: "属于民事责任承担方式。",
    source: "第 19 页"
  },
  {
    id: 148, type: QuestionType.TRUE_FALSE,
    title: "刑事责任中，管制的期限最高为2年。",
    answer: "√",
    explanation: "法律规定主刑期限。",
    source: "第 19 页"
  },
  {
    id: 149, type: QuestionType.TRUE_FALSE,
    title: "暂扣许可证件由法院执行。",
    answer: "×",
    explanation: "由国家行政机关执行。",
    source: "第 19 页"
  },
  {
    id: 150, type: QuestionType.TRUE_FALSE,
    title: "法体现的是统治阶级的“整体意志”。",
    answer: "√",
    explanation: "法的本质核心。",
    source: "第 2 页"
  }
];
