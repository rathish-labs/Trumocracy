/**
 * Arabic copy — the right-to-left locale.
 *
 * `ar` is in the launch set from the first commit rather than retrofitted (ADR-012 §6),
 * because RTL is not a translation task: it changes layout, focus order, icon direction
 * and the meaning of "start" and "end" in every stylesheet rule. A codebase that adds RTL
 * later discovers it has written `margin-left` two hundred times.
 *
 * Translation status: these strings are a working draft by an engineer, not a reviewed
 * translation. Doc 14 owns the reviewed copy for launch languages.
 */
import type { Messages } from './en';

export const ar: Messages = {
  meta: {
    name: 'العربية',
    dir: 'rtl',
  },
  common: {
    appName: 'ترومقراطية',
    skipToContent: 'انتقل إلى المحتوى',
    loading: 'جارٍ التحميل…',
    back: 'رجوع',
    cancel: 'إلغاء',
    close: 'إغلاق',
    learnMore: 'اعرف المزيد',
    required: 'مطلوب',
    charactersSoFar: (n: number, min: number) => `${n} من ${min} حرفًا حتى الآن`,
    language: 'اللغة',
  },
  nav: {
    home: 'الرئيسية',
    parties: 'الأحزاب',
    startAParty: 'ابدأ حزبًا',
    verify: 'أثبت أنك شخص حقيقي',
  },
  home: {
    title: 'ابدأ حزبًا سياسيًا. أو انضم إلى حزب.',
    lead:
      'تتيح ترومقراطية للناس العاديين بدء حزب سياسي، وجمع الدعم العام، وإدارته بقواعد لا يستطيع أحد ' +
      'تغييرها. لا مالك. لا مكتب رئيسي. ولا حاجة إلى موافقتنا.',
    howTitle: 'كيف تعمل',
    steps: [
      {
        title: 'أثبت أنك شخص حقيقي واحد',
        body:
          'تثبت أنك شخص حقيقي مرة واحدة. أنت تختار من يتحقق من ذلك. لا نرى أوراقك ولا اسمك ولا ' +
          'عنوانك، ولا نحتفظ بها.',
      },
      {
        title: 'ادعم الأحزاب التي تؤمن بها',
        body:
          'ادعم حزبًا جديدًا مع بقاء اسمك سريًا. عندما يدعمه عدد كافٍ من الناس في منطقتك، يبدأ الحزب. ' +
          'لا أحد يقرر ذلك. العدد هو من يقرر.',
      },
      {
        title: 'صوتك مساوٍ لصوت غيرك',
        body:
          'لكل عضو صوت واحد. المال لا يشتري شيئًا. لا يمكنك إعطاء صوتك لأحد، ولا يمكن لأحد شراء صوت ' +
          'غيره.',
      },
    ],
    promisesTitle: 'ما نعد به',
    promises: [
      'لا نعرف أبدًا أي حزب تدعم.',
      'لا يستطيع أحد إبعادك أو منعك أو إيقاف حزبك.',
      'كل قاعدة مكتوبة، وتنطبق القواعد نفسها على الجميع.',
      'لا نحصي زياراتك، ولا نحتفظ بسجل لما تقرأه هنا.',
    ],
    cta: 'ابدأ',
  },
  verify: {
    title: 'أثبت أنك شخص حقيقي',
    lead: 'يحدث هذا مرة واحدة. يثبت أنك شخص حقيقي واحد، ولا يخبر أحدًا بهويتك.',
    onDeviceTitle: 'كل شيء يحدث على هاتفك',
    onDeviceBody:
      'يقرأ هاتفك وثيقتك ويجري الحساب بنفسه. لا تغادر الوثيقة هاتفك أبدًا. ما يُرسل هو إثبات قصير ' +
      'يقول «هذا شخص حقيقي واحد» ولا شيء غير ذلك.',
    chooseIssuer: 'اختر من يتحقق منك',
    chooseIssuerHelp:
      'يمكنك اختيار أي منها. إن كنت لا تثق بأحدها فاختر غيره. واحد منها على الأقل لا تديره الحكومة.',
    issuerRunByState: 'تديره جهة حكومية',
    issuerIndependent: 'مستقل عن الحكومة',
    start: 'ابدأ',
    keptTitle: 'ما يُحفظ وما لا يُحفظ',
    kept: ['رمز قصير يعني «شخص حقيقي واحد»، ولا يمكن تتبعه إليك.'],
    notKept: ['اسمك', 'عنوانك', 'تاريخ ميلادك', 'صورة أو مسح أو بصمة', 'رقم هاتفك أو بريدك'],
  },
  parties: {
    title: 'الأحزاب',
    lead: 'كل حزب هنا بدأه الناس، لا نحن.',
    members: 'عضوًا',
    founded: 'بدأ في',
    readManifesto: 'اقرأ ما يدعون إليه',
    join: 'انضم',
    empty: 'لا توجد أحزاب بعد. لا بد أن يكون أحدهم الأول.',
    manifestoTitle: 'ما يدعو إليه هذا الحزب',
    historyTitle: 'كل نسخة، محفوظة إلى الأبد',
    historyLead:
      'يمكن للحزب أن يغيّر ما يقوله، لكنه لا يستطيع إخفاء ما قاله سابقًا. هذه كل النسخ، الأقدم في ' +
      'الأسفل.',
    versionLabel: (n: number) => `النسخة ${n}`,
    changeSummary: 'ما الذي تغيّر',
    diffAdded: 'أُضيف',
    diffRemoved: 'حُذف',
    diffUnchanged: 'دون تغيير',
    joinTitle: 'انضم إلى هذا الحزب',
    joinLead:
      'لا يحتاج هذا إلى موافقة أحد. تنضم فتصبح عضوًا. ويمكنك المغادرة متى شئت ولا يستطيع أحد منعك.',
    joinEqual: 'لكل عضو صوت واحد بالضبط، وأنت منهم، من يومك الأول.',
    // v1-accurate copy (FR-131(b)) — mirrors en.ts; engineer-authored working
    // draft, flagged for native-speaker review (Doc 06 §7 limitation).
    joinPrivate:
      'عضويتك لا تُنشر للعموم. في هذه النسخة من المنصة، يمكن لسجلاتنا نحن أن تربط حسابك بالحزب ' +
      'الذي تنضم إليه. هذا الربط لا يُنشر أبدًا. نقول هذا بوضوح بدل أن نعد بأكثر مما نستطيع الوفاء به.',
    joinConfirm: 'انضم الآن',
    // ─── Membership flow (FR-020/021/022, FR-064, FR-130) ───
    memberBadge: 'أنت عضو',
    joined: 'أصبحت الآن عضوًا في هذا الحزب.',
    leave: 'غادر هذا الحزب',
    leaveHelp: 'المغادرة تسري فورًا. لا خطوة موافقة ولا عقوبة.',
    left: 'لقد غادرت هذا الحزب.',
    onePartyRule: 'يمكنك الانتماء إلى حزب واحد في كل مرة. مغادرة حزب والانضمام إلى آخر خيارك دائمًا.',
    alreadyMemberElsewhere: (name: string) =>
      `أنت عضو بالفعل في ${name}. يمكنك الانتماء إلى حزب واحد في كل مرة. ` +
      `غادر ${name} أولًا، ثم انضم إلى هذا الحزب.`,
    membershipHistoryTitle: 'سجل عضويتك',
    membershipHistoryLead: 'الانضمام والمغادرة كلاهما يُسجَّل. لا شيء هنا يُحذف أبدًا.',
    historyJoined: (date: string) => `انضممت في ${date}`,
    historyLeft: (date: string) => `غادرت في ${date}`,
    historyActive: 'عضو الآن',
    historyInactive: 'لم تعد عضوًا',
    officialStrength: (n: number) => `${n.toLocaleString('ar')} من الأعضاء المحسوبين`,
    memberCount: (n: number) => `${n.toLocaleString('ar')} عضوًا`,
    // ─── Counting tier (FR-122/FR-123, FR-131 clause (d)) ───
    countingTitle: 'هل تُحسب عضويتي؟',
    countingOpenBody:
      'أنت عضو حقيقي في هذا الحزب. يمكنك القراءة والنقاش والدعم والتنظيم. ' +
      'لكن الانضمام ليس هو الاحتساب. حتى تجتاز فحص هوية حكومية، لست جزءًا من رقم القوة الرسمي لهذا الحزب.',
    countingCountedBody: 'أنت محسوب في رقم القوة الرسمي لهذا الحزب.',
    countMe: 'احسبني في القوة الرسمية',
    // إشعار البند (د) من FR-131 — يُعرض قبل رفض الإجراء؛ لا يمكن إغلاقه.
    openTierNoticeTitle: 'هذا الإجراء يحتاج خطوة إضافية',
    openTierNoticeCurrent: 'أنت الآن تشارك في المستوى المفتوح. انضممت برقم هاتف فقط.',
    openTierNoticeNeedsId: 'الاحتساب يحتاج أولًا إلى فحص هوية حكومية.',
    openTierNoticeWhatDoesNotCount:
      'حتى ذلك الحين، ثلاثة أشياء لا تُحسب لك: لست جزءًا من رقم القوة الرسمي للحزب، ' +
      'وصوتك لا يقرر في القرارات الملزمة، ولا يمكنك الترشح.',
    openTierNoticeHowTo:
      'لكي تُحسب، أكمل فحص الهوية الحكومية. هذا الفحص غير مفعّل بعد في هذه النسخة. ' +
      'كل شيء آخر في عضويتك يعمل الآن.',
    openTierNoticeRefused: 'طلبك لم يُحسب. لا شيء آخر تغيّر.',
  },
  // ─── المقترحات والنقاش (FR-024, FR-079/080, FR-090, FR-091, FR-092, FR-123) ───
  // ENGINEER DRAFT — native-speaker review owed before launch (Doc 06 §7 #17;
  // Doc 02 §13 tracked deferral (b)). Mirrors the en.ts proposals section.
  debate: {
    title: 'المقترحات',
    lead:
      'يمكن لأي عضو في حزب أن يطرح سؤالًا على الأعضاء. ويمكن لأي عضو آخر أن يجيب عليه بمقترح ' +
      'مختلف. لا أحد يقرر وحده ما هي الخيارات المتاحة أمام الناس.',
    empty: 'لم يُطرح أي سؤال على هذا الحزب بعد.',
    questionLabel: 'السؤال',
    windowStage: 'المرحلة الآن',
    proposalCount: (n: number) => (n === 1 ? 'مقترح واحد' : `${n} مقترحات`),
    competingLead:
      'هذه المقترحات كلها تجيب على السؤال نفسه، وهي متساوية في المكانة. ومن طرح السؤال أولًا ' +
      'ليس له أي سلطة على البقية.',
    byAuthor: (who: string) => `تقدّم به ${who}`,
    originalTag: 'طرح السؤال',
    competingTag: 'يجيب على السؤال نفسه',
    fileTitle: 'اطرح مقترحًا على الأعضاء',
    fileLead:
      'اذكر السؤال الذي تجيب عليه وما ستفعله. لا أحد يراجع هذا مسبقًا. يصل إلى الأعضاء كما كتبته.',
    questionField: 'السؤال الذي تجيب عليه',
    questionHelp: 'إذا كان أحد قد طرح هذا السؤال، ينضم مقترحك إلى مقترحه ويختار الأعضاء بينهما.',
    titleField: 'اسم مختصر لمقترحك',
    bodyField: 'ما ستفعله، ولماذا',
    tierField: 'ما حجم هذا القرار؟',
    fileConfirm: 'اطرح هذا على الأعضاء',
    filed: 'مقترحك الآن بين يدي الأعضاء.',
    workerGateTitle: 'طرح المقترحات يكون علنًا',
    workerGateBody:
      'الأعضاء الذين يطرحون المقترحات يفعلون ذلك علنًا، باسم يراه بقية الأعضاء. أما المناصرون ' +
      'فيشاركون دون اسم علني، ولذلك لا يمكن أن يكون المناصر صاحب مقترح.',
    workerGateHow:
      'يمكنك أن تعلن أنك عامل في أي وقت. لا أحد يوافق على ذلك — أنت من يقرر. وهو يستمر طوال ' +
      'المدة، ويجعل سجل مشاركتك في هذا الحزب علنيًا طوال تلك المدة.',
    workerGateAction: 'أعلن أنني عامل',
    // FR-080 informed-consent event — engineer draft; native review owed (§7 #17).
    workerConsentTitle: 'قبل أن تعلن أنك عامل',
    workerConsentPermanent: 'هذا يستمر طوال المدة كلها. لا يمكنك التراجع عنه في منتصفها.',
    workerConsentPublicRecord:
      'يصبح سجل مشاركتك في هذا الحزب علنيًا طوال المدة — ليس فقط المقترحات التي تطرحها، ' +
      'بل ما تشارك فيه أيضًا.',
    workerConsentNoApproval: 'لا أحد يراجع هذا. عندما تؤكد، يتم الأمر.',
    workerConsentConfirm: 'أفهم ذلك — اجعلني عاملًا',
    workerConsentCancel: 'ليس الآن',
    workerGateNotJudgement: 'هذا لا يتعلق بجودة فكرتك، بل فقط بما إذا كان اسمك علنيًا.',
    stageNames: {
      PROPOSAL: 'طُرح',
      REVIEW: 'قراءة أولى',
      DISCUSSION: 'نقاش',
      DEBATE: 'مناظرة',
      VOTE: 'تصويت',
      DECISION: 'قرار',
      IMPLEMENTATION: 'قيد التنفيذ',
      MEASUREMENT: 'قياس ما حدث',
    },
    stageLead:
      'كل سؤال يمر بالخطوات نفسها وبالترتيب نفسه. لا تُتخطى أي خطوة ولا يستطيع أحد القفز فوق واحدة.',
    stageDone: 'انتهت',
    stageNow: 'الآن',
    stageToCome: 'قادمة',
    competingClosed:
      'تجاوز الأعضاء النقطة التي يمكن فيها لمقترح جديد أن ينضم إلى هذا السؤال، لأن ذلك سيغيّر ما ' +
      'سُئل عنه الناس بالفعل.',
    discussionTitle: 'ما قاله الأعضاء',
    discussionLead:
      'كل ما يُقال هنا يُحفظ. هو سجل للنقاش — ولا يقرر شيئًا بذاته.',
    discussionEmpty: 'لم يُقل شيء بعد.',
    discussionField: 'قل ما ترى',
    discussionSend: 'أضف إلى النقاش',
    discussionOpenToAll:
      'يمكن لكل عضو المشاركة في هذا، بمن فيهم الأعضاء الذين لم يجروا فحص الهوية الحكومية.',
    discussionClosed: 'أُغلق النقاش حول هذا السؤال.',
    ballotTitle: 'التصويت',
    ballotLead: 'يختار الأعضاء بين المقترحات أعلاه.',
    ballotCheck: 'تحقق مما إذا كان صوتي يُحسب',
    ballotAdmitted: 'صوتك يُحسب في هذا القرار.',
    ballotNotOpen: 'لم يُفتح التصويت بعد.',
    trailTitle: 'كل ما حدث، بالترتيب',
    trailLead:
      'تُكتب كل خطوة وقت حدوثها ولا تُغيَّر أبدًا. يمكنك قراءة قصة القرار كاملة من أولها إلى آخرها.',
    trailEvents: {
      WINDOW_OPENED: 'طُرح السؤال',
      PROPOSAL_FILED: 'قُدّم مقترح',
      DELIBERATION_POSTED: 'تحدّث أحدهم',
      STAGE_ADVANCED: 'انتقل إلى الخطوة التالية',
      BALLOT_ADMISSION: 'قُبل عضو في التصويت',
    },
    trailV1Note:
      'في هذه النسخة نحتفظ نحن بالسجل. أما نشره بحيث يستطيع أي شخص التحقق منه دون الوثوق بنا ' +
      'فغير مفعّل بعد. نفضّل أن نقول ذلك على أن نوحي بأكثر منه.',
  },
  petitions: {
    newTitle: 'ابدأ حزبًا',
    newLead:
      'اكتب ما سيفعله حزبك في كل مجال من المجالات الثمانية أدناه. المجالات الثمانية كلها مطلوبة، ' +
      'ليحكم الناس على برنامج كامل لا على شعار.',
    nameLabel: 'اسم الحزب',
    nameHelp: 'حتى 80 حرفًا.',
    jurisdictionLabel: 'المنطقة التي يمثلها الحزب',
    jurisdictionHelp: 'مثال: IN/KA/BLR. استخدم رموز بلدك وولايتك ومدينتك.',
    pillarsTitle: 'المجالات الثمانية',
    completeness: (done: number, total: number) => `${done} من ${total} مجالات جاهزة`,
    pillarNames: {
      finance: 'المال والاقتصاد',
      society: 'الناس والمجتمعات',
      governance: 'كيف تُتخذ القرارات',
      law: 'القانون والعدالة',
      education: 'المدارس والتعليم',
      healthcare: 'الصحة والرعاية',
      security: 'الأمن والدفاع',
      regional: 'منطقتك المحلية',
    },
    pillarHelp: 'اكتب 280 حرفًا على الأقل ليتمكن الناس من الحكم عليه.',
    publish: 'انشر وابدأ جمع الدعم',
    publishBlocked: 'أكمل المجالات الثمانية قبل النشر',
    progressTitle: 'الدعم حتى الآن',
    supporters: (n: number) => `${n.toLocaleString('ar')} داعمًا`,
    needed: (n: number) => `${n.toLocaleString('ar')} مطلوب`,
    remaining: (n: number) => `بقي ${n.toLocaleString('ar')}`,
    percentReady: (p: number) => `${p}٪ من الطريق`,
    timeLeft: (d: number, h: number) => `بقي ${d} يومًا و${h} ساعة`,
    closed: 'أُغلق هذا.',
    met: 'دعمه عدد كافٍ من الناس. يمكن للحزب أن يبدأ.',
    support: 'ادعم هذا الحزب',
    withdraw: 'اسحب دعمي',
    supportPublicWarning:
      'دعم حزب جديد فعل علني، مثل التوقيع على عريضة عامة. لا يظهر اسمك، لكن يظهر أن شخصًا من منطقتك ' +
      'دعمه.',
    whyThisNumber: 'لماذا هذا العدد؟',
    whyThisNumberBody: (binding: string) =>
      binding === 'absolute-floor'
        ? 'يحتاج أي حزب إلى 500 داعم على الأقل، مهما صغرت المنطقة.'
        : binding === 'verified-residents'
          ? 'هذه نسبة من سكان المنطقة الذين أثبتوا أنهم حقيقيون.'
          : 'هذه نسبة من عدد سكان هذه المنطقة.',
    // Party-creation additions — emblem, charter, BR-020, FR-130, FR-077.
    // Translation status: working draft by engineer; reviewed copy owed at Doc 14.
    emblemLabel: 'شعار الحزب',
    emblemHelp: 'رمز قصير لحزبك. ثمانية أحرف كحدٍّ أقصى — كأن تكون حرفين أو ثلاثة.',
    jurisdictionSelectLabel: 'المنطقة التي يمثلها هذا الحزب',
    jurisdictionSelectHelp: 'اختر المنطقة التي سيمثلها حزبك. ستُضاف مناطق أخرى مع الوقت.',
    jurisdictionSelectPlaceholder: 'اختر منطقة',
    nonViolenceTitle: 'التزام بالسلمية',
    nonViolenceHelp:
      'يجب أن يتضمن كل حزب هذا البيان. لا يمكن حذفه أو تعديله. ' +
      'هذا هو القيد الوحيد الذي تضعه المنصة على ما يؤمن به الحزب.',
    charterSectionTitle: 'قواعد الحزب',
    charterSectionHelp:
      'هذه هي القواعد التي سيلتزم بها حزبك. تضع المنصة معايير دنيا، ويمكن لحزبك اختيار قواعد أكثر صرامة، لكن لا يمكنه اختيار قواعد أضعف.',
    // BR-020 disclosure.
    platformNotLegalTitle: 'إنشاء حزب هنا لا يعني التسجيل القانوني',
    platformNotLegalBody:
      'إنشاء حزب على هذه المنصة يعني وجوده هنا حيث يمكن للناس دعمه. ' +
      'لا يعني ذلك أن حزبك مسجَّل قانونيًا لدى أي جهة حكومية. ' +
      'لا نستطيع منح أو إلغاء الاعتراف القانوني. ستحتاج إلى اتباع قواعد بلدك للتسجيل القانوني بشكل مستقل.',
    // FR-130 provisional status.
    provisionalLabel: 'ما قبل التحقق القانوني',
    provisionalCapHelpOpen: (cap: number) =>
      `هذا الحزب جديد وغير مسجَّل قانونيًا بعد. يمكنه استقبال حتى ${cap} عضوًا في الوقت الحالي. ` +
      `يُرفع هذا الحد تلقائيًا عند إتمام الحزب تسجيله القانوني.`,
    provisionalCapHelpReached: (cap: number) =>
      `وصل هذا الحزب إلى حد ${cap} عضوًا المخصص للأحزاب الجديدة غير المسجَّلة قانونيًا. ` +
      `لا يمكن قبول أعضاء جدد حتى يُتمّ الحزب تسجيله القانوني.`,
    provisionalCapHelpLegal: 'هذا الحزب مسجَّل قانونيًا. لا يوجد حد لعدد الأعضاء.',
    // Draft/publish feedback.
    draftSaved: 'تم حفظ مسودتك.',
    petitionStarted: 'حزبك مفتوح الآن لتلقي الدعم.',
    collisionName: 'يوجد حزب أو عريضة بنفس الاسم في منطقتك.',
    collisionEmblem: 'يوجد حزب أو عريضة بنفس الشعار في منطقتك.',
    cooldownActive: (reopensAt: number) =>
      `لقد قدّمت حزبًا مشابهًا مؤخرًا في هذه المنطقة. يمكنك التقديم مجددًا بعد ${new Date(reopensAt * 1000).toLocaleDateString('ar')}.`,
  },
  proposals: {
    title: 'قرار',
    discussion: 'قيد النقاش',
    voting: 'التصويت مفتوح',
    tallying: 'جارٍ العد',
    defeated: 'لم يمر',
    timelocked: 'مرَّ، في الانتظار',
    executed: 'نُفِّذ',
    cancelled: 'سُحب',
    barTitle: 'ما يحتاجه هذا كي يمر',
    quorum: (pct: string) => `يجب أن يشارك ${pct} من الأعضاء على الأقل`,
    approval: (pct: string) => `يجب أن يقول ${pct} على الأقل ممن اختاروا جانبًا: نعم`,
    tenure: (days: number) => `يجب أن تكون عضوًا منذ ${days} يومًا`,
    resultsHidden: 'لا تُعرض أي نتائج قبل إغلاق التصويت.',
    resultsHiddenWhy: 'الأرقام المبكرة تغيّر تصويت الناس، لذلك لا يراها أحد.',
    castVote: 'أدلِ بصوتك',
    choiceFor: 'نعم',
    choiceAgainst: 'لا',
    choiceAbstain: 'أشارك دون اختيار جانب',
    submit: 'أرسل صوتي',
  },
  vote: {
    confirmTitle: 'قُبل صوتك',
    confirmBody: 'قُبل صوتك وسيُحتسب.',
    changeVote: 'غيّر صوتي',
    changeVoteHelp: 'يمكنك تغيير صوتك كما تشاء حتى إغلاق التصويت.',
    changeVoteWindow: (closes: string) => `يمكنك تغييره حتى ${closes}.`,
    panic: 'ابدأ من جديد',
    panicHelp: 'يفتح ورقة تصويت جديدة.',
    done: 'تم',
  },
  banner: {
    notReceiptFreeTitle: 'في هذه النسخة، صوتك ليس مجهول الهوية وليس محميًا من الإكراه',
    notReceiptFreeBody:
      'هذه النسخة تسجّل دخولك بالطريقة العادية. صوتك ليس مجهول الهوية، وليس خاليًا من الإيصال، ' +
      'وليس مقاومًا للإكراه. سجلات ترومقراطية نفسها تستطيع أن ترى كيف صوّتّ وإلى أي حزب تنتمي. ' +
      'لا أحد خارج ترومقراطية يرى ذلك في أي صفحة عامة. لكن السجل موجود، ويمكن إظهاره إذا ضغط ' +
      'عليك أحد لتثبت كيف صوّتّ. ورقة اقتراع تُخفي كيف صوّتّ حتى عن ترومقراطية قادمة في ترقية ' +
      'الخصوصية لاحقًا. وهي غير مُفعَّلة بعد. لا تصوّت أمام من يضغط عليك.',
    notReceiptFreeMore: 'ما الذي ينقص',
  },
  errors: {
    title: 'هناك خطأ ما',
    trustBoundary:
      'اختلفت النسخة السريعة من البيانات مع السجل نفسه. توقفنا بدل أن نعرض عليك رقمًا قد يكون خاطئًا.',
    anonymityTooSmall:
      'عدد من أثبتوا أنهم حقيقيون في منطقتك قليل جدًا، فالتصرف هنا سيشير إليك. سنستخدم منطقة أوسع.',
    flagOff: 'هذا الجزء غير مُفعَّل بعد.',
    generic: 'لم نتمكن من إتمام ذلك. لم يُرسل شيء.',
  },
  a11y: {
    progressLabel: (pct: number) => `الدعم: ${pct} بالمئة من العدد المطلوب`,
    errorSummary: (n: number) => `${n} أمور تحتاج إلى انتباهك`,
    externalLink: 'يفتح في تبويب جديد',
    currentPage: 'الصفحة الحالية',
  },
};
