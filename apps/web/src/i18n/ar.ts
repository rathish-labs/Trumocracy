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
    joinPrivate: 'لا يُعطى الحزب قائمة بأعضائه. لا أحد يحصل على تلك القائمة، ولا نحن.',
    joinConfirm: 'انضم الآن',
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
    notReceiptFreeTitle: 'صوتك سري، لكنه ليس محميًا بعد من الإكراه',
    notReceiptFreeBody:
      'لا يستطيع أحد أن يرى أن هذا الصوت صوتك. لكن العد يجري الآن في العلن، فقد يستنتج من يقف فوق ' +
      'كتفك كيف صوّتّ مما يظهر على شاشتك. الجزء الذي يعالج هذا غير مُفعَّل بعد. لا تصوّت أمام من ' +
      'يضغط عليك.',
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
