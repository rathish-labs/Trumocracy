/**
 * English copy.
 *
 * House rule for every string in this file: **grade-8 reading level, no crypto vocabulary**
 * (ADR-012 §1, NFR-023). Never "sign a transaction", "gas", "wallet", "nonce", "mint",
 * "on-chain". Jargon is not a style problem here — it selects for an existing crypto
 * audience, and that audience is not the electorate.
 *
 * Short sentences. Common words. Say what happens next.
 */
export const en = {
  meta: {
    name: 'English',
    dir: 'ltr' as 'ltr' | 'rtl',
  },
  common: {
    appName: 'Trumocracy',
    skipToContent: 'Skip to main content',
    loading: 'Loading…',
    back: 'Back',
    cancel: 'Cancel',
    close: 'Close',
    learnMore: 'Learn more',
    required: 'Required',
    charactersSoFar: (n: number, min: number) => `${n} of ${min} characters so far`,
    language: 'Language',
  },
  nav: {
    home: 'Home',
    parties: 'Parties',
    startAParty: 'Start a party',
    verify: 'Prove you are a real person',
  },
  home: {
    title: 'Start a political party. Or join one.',
    lead:
      'Trumocracy lets ordinary people start a political party, gather public support, and run it by ' +
      'rules that nobody can bend. No owner. No head office. No approval from us.',
    howTitle: 'How it works',
    steps: [
      {
        title: 'Show you are one real person',
        body:
          'You prove you are a real person, once. You choose who checks this. We never see your ' +
          'documents, your name or your address, and we do not keep them.',
      },
      {
        title: 'Back the parties you believe in',
        body:
          'Support a new party with your name kept private. When enough people in your area back it, ' +
          'the party starts. Nobody decides this. The count does.',
      },
      {
        title: 'Have an equal say',
        body:
          'Every member gets one vote. Money buys nothing. There is no way to give your vote away, ' +
          'and no way to buy anybody else’s.',
      },
    ],
    promisesTitle: 'What we promise',
    promises: [
      'We never learn which party you support.',
      'Nobody can remove you, block you, or stop your party.',
      'Every rule is written down, and the same rules apply to everyone.',
      'We do not count your visits, and we do not keep a record of what you read here.',
    ],
    cta: 'Get started',
  },
  verify: {
    title: 'Show that you are a real person',
    lead:
      'This happens once. It proves that you are one real person, and it does not tell anyone who ' +
      'you are.',
    onDeviceTitle: 'Everything happens on your phone',
    onDeviceBody:
      'Your phone reads your document and does the maths itself. The document never leaves your ' +
      'phone. What gets sent is a short proof that says “this is one real person” and ' +
      'nothing else.',
    chooseIssuer: 'Choose who checks you',
    chooseIssuerHelp:
      'You can pick any of these. If you do not trust one of them, pick another. At least one of ' +
      'them is never run by a government.',
    issuerRunByState: 'Run by a government body',
    issuerIndependent: 'Independent of government',
    start: 'Start',
    keptTitle: 'What is kept, and what is not',
    kept: ['A short code that means “one real person”, which cannot be traced back to you.'],
    notKept: [
      'Your name',
      'Your address',
      'Your date of birth',
      'A photo, a scan, or a fingerprint',
      'Your phone number or email',
    ],
  },
  parties: {
    title: 'Parties',
    lead: 'Every party here was started by people, not by us.',
    members: 'members',
    founded: 'Started',
    readManifesto: 'Read what they stand for',
    join: 'Join',
    empty: 'No parties yet. Somebody has to be first.',
    manifestoTitle: 'What this party stands for',
    historyTitle: 'Every version, kept forever',
    historyLead:
      'A party can change what it says, but it can never hide what it said before. Here is every ' +
      'version, oldest last.',
    versionLabel: (n: number) => `Version ${n}`,
    changeSummary: 'What changed',
    diffAdded: 'Added',
    diffRemoved: 'Removed',
    diffUnchanged: 'Unchanged',
    joinTitle: 'Join this party',
    joinLead:
      'Nobody has to approve this. You join, and you are a member. You can leave at any time and ' +
      'nobody can stop you.',
    joinEqual: 'Every member has exactly one vote, including you, from your first day.',
    // v1-accurate copy (FR-131(b) disclosure duty). The earlier "nobody gets that
    // list, including us" claim was true only of the v2 backing and is NOT true of
    // the v1 conventional backing — the platform's own records CAN link an account
    // to its party. Say so plainly rather than promise more than v1 keeps.
    joinPrivate:
      'Your membership is not made public. In this version of the platform, our own records can ' +
      'link your account to the party you join. That link is never published. We tell you this ' +
      'plainly instead of promising more than we can keep.',
    joinConfirm: 'Join now',
    // ─── Membership flow (FR-020/021/022, FR-064, FR-130) ───
    memberBadge: 'You are a member',
    joined: 'You are now a member of this party.',
    leave: 'Leave this party',
    leaveHelp: 'Leaving takes effect at once. There is no approval step and no penalty.',
    left: 'You have left this party.',
    onePartyRule:
      'You can belong to one party at a time. Leaving one and joining another is always your choice.',
    alreadyMemberElsewhere: (name: string) =>
      `You are already a member of ${name}. You can belong to one party at a time. ` +
      `Leave ${name} first, then join this one.`,
    membershipHistoryTitle: 'Your membership history',
    membershipHistoryLead: 'Joining and leaving are both recorded. Nothing here is ever deleted.',
    historyJoined: (date: string) => `Joined ${date}`,
    historyLeft: (date: string) => `Left ${date}`,
    historyActive: 'Member now',
    historyInactive: 'No longer a member',
    officialStrength: (n: number) => `${n.toLocaleString()} counted members`,
    memberCount: (n: number) => `${n.toLocaleString()} members`,
    // ─── Counting tier (FR-122/FR-123, FR-131 clause (d)) ───
    countingTitle: 'Does my membership count?',
    countingOpenBody:
      'You are a real member of this party. You can read, discuss, support and organise. ' +
      'But joining is not the same as counting. Until you pass a government ID check, you are ' +
      'not part of this party’s official strength number.',
    countingCountedBody: 'You are counted in this party’s official strength number.',
    countMe: 'Count me in the official strength',
    // FR-131 clause (d) notice — shown before the action is refused; non-dismissable.
    openTierNoticeTitle: 'This action needs one more step',
    openTierNoticeCurrent:
      'Right now you take part in the open tier. You joined with a phone number only.',
    openTierNoticeNeedsId: 'Being counted needs a government ID check first.',
    openTierNoticeWhatDoesNotCount:
      'Until then, three things do not count for you: you are not part of the party’s official ' +
      'strength number, your vote does not decide a binding decision, and you cannot stand as a ' +
      'candidate.',
    openTierNoticeHowTo:
      'To be counted, complete the government ID check. That check is not switched on yet in this ' +
      'version. Everything else about your membership works now.',
    openTierNoticeRefused: 'Your request was not counted. Nothing else has changed.',
  },
  // ─── Proposals & debate (FR-024, FR-079/080, FR-090, FR-091, FR-092, FR-123) ───
  // Distinct from `proposals` below, which names a proposal's BALLOT state (voting,
  // tallying, executed). This section is the authoring and deliberation flow.
  debate: {
    title: 'Proposals',
    lead:
      'Anyone in a party can put a question to the members. Anyone else can answer it with a ' +
      'different proposal. Nobody decides on their own which answer people get to choose from.',
    empty: 'No questions have been put to this party yet.',
    // Decision window — the group of proposals answering one question.
    questionLabel: 'The question',
    windowStage: 'Stage now',
    proposalCount: (n: number) => (n === 1 ? '1 proposal' : `${n} proposals`),
    competingLead:
      'These proposals all answer the same question. They stand equally. The person who asked ' +
      'first has no say over the others.',
    byAuthor: (who: string) => `Put forward by ${who}`,
    originalTag: 'Asked the question',
    competingTag: 'Answering the same question',
    // Filing
    fileTitle: 'Put a proposal to the members',
    fileLead:
      'Say what question you are answering and what you would do. Nobody screens this. It goes ' +
      'to the members as written.',
    questionField: 'The question you are answering',
    questionHelp:
      'If someone has already asked this question, your proposal joins theirs and members choose ' +
      'between them.',
    titleField: 'A short name for your proposal',
    bodyField: 'What you would do, and why',
    tierField: 'How big a decision is this?',
    fileConfirm: 'Put this to the members',
    filed: 'Your proposal is now with the members.',
    // Worker-tier gate (FR-024/FR-080 — a disclosure step, never an approval step)
    workerGateTitle: 'Putting a proposal forward is public',
    workerGateBody:
      'Members who put proposals forward do so in the open, under a name other members can see. ' +
      'Supporters take part without a public name, so a Supporter cannot be the author of a ' +
      'proposal.',
    workerGateHow:
      'You can say you are a Worker at any time. Nobody approves it — you decide. Doing so makes ' +
      'what you put forward public for the term.',
    workerGateAction: 'Say I am a Worker',
    workerGateNotJudgement:
      'This is not about whether your idea is good. It is only about whether your name is public.',
    // Lifecycle (FR-091)
    stageNames: {
      PROPOSAL: 'Put forward',
      REVIEW: 'First read',
      DISCUSSION: 'Discussion',
      DEBATE: 'Debate',
      VOTE: 'Vote',
      DECISION: 'Decision',
      IMPLEMENTATION: 'Being carried out',
      MEASUREMENT: 'Checking what happened',
    },
    stageLead:
      'Every question goes through the same steps in the same order. No step is skipped and ' +
      'nobody can jump one.',
    stageDone: 'Done',
    stageNow: 'Now',
    stageToCome: 'To come',
    competingClosed:
      'The members are past the point where a new proposal can join this question. It would ' +
      'change what people have already been asked.',
    // Deliberation (FR-091 — records, never outcomes)
    discussionTitle: 'What members have said',
    discussionLead:
      'Anything said here is kept. It is a record of the discussion — it does not decide ' +
      'anything on its own.',
    discussionEmpty: 'Nothing has been said yet.',
    discussionField: 'Say what you think',
    discussionSend: 'Add to the discussion',
    discussionOpenToAll:
      'Every member can take part in this, including members who have not done a government ID ' +
      'check.',
    discussionClosed: 'The discussion for this question has closed.',
    // Ballot admission (FR-123 counting gate)
    ballotTitle: 'The vote',
    ballotLead: 'Members choose between the proposals above.',
    ballotCheck: 'Check whether my vote counts',
    ballotAdmitted: 'Your vote counts in this decision.',
    ballotNotOpen: 'The vote has not opened yet.',
    // Decision trail (FR-092)
    trailTitle: 'Everything that happened, in order',
    trailLead:
      'Every step is written down as it happens and never changed. You can read the whole story ' +
      'of a decision from start to finish.',
    trailEvents: {
      WINDOW_OPENED: 'Question asked',
      PROPOSAL_FILED: 'Proposal put forward',
      DELIBERATION_POSTED: 'Someone spoke',
      STAGE_ADVANCED: 'Moved to the next step',
      BALLOT_ADMISSION: 'A member was admitted to the vote',
    },
    // v1 honesty about the trail's reach (FR-092 partial)
    trailV1Note:
      'In this version the record is kept by us. Publishing it so that anyone can check it ' +
      'without trusting us is not switched on yet. We would rather say that than imply more.',
  },
  petitions: {
    newTitle: 'Start a party',
    newLead:
      'Write what your party would do about each of the eight areas below. All eight are needed. ' +
      'This is so people can judge a whole programme, not a slogan.',
    nameLabel: 'Party name',
    nameHelp: 'Up to 80 characters.',
    jurisdictionLabel: 'Where this party stands',
    jurisdictionHelp: 'For example: IN/KA/BLR. Use the area codes for your country, state and city.',
    pillarsTitle: 'The eight areas',
    completeness: (done: number, total: number) => `${done} of ${total} areas ready`,
    pillarNames: {
      finance: 'Money and the economy',
      society: 'People and communities',
      governance: 'How decisions get made',
      law: 'Law and justice',
      education: 'Schools and learning',
      healthcare: 'Health and care',
      security: 'Safety and defence',
      regional: 'Your local area',
    },
    pillarHelp: 'Write at least 280 characters, so people can judge it.',
    publish: 'Publish and start gathering support',
    publishBlocked: 'Finish all eight areas before you publish',
    progressTitle: 'Support so far',
    supporters: (n: number) => `${n.toLocaleString()} supporters`,
    needed: (n: number) => `${n.toLocaleString()} needed`,
    remaining: (n: number) => `${n.toLocaleString()} more to go`,
    percentReady: (p: number) => `${p}% of the way there`,
    timeLeft: (d: number, h: number) => `${d} days and ${h} hours left`,
    closed: 'This has closed.',
    met: 'Enough people backed this. The party can start.',
    support: 'Support this party',
    withdraw: 'Take back my support',
    supportPublicWarning:
      'Backing a new party is a public act, like signing a public petition. Your name is not shown, ' +
      'but the fact that somebody in your area backed it is.',
    whyThisNumber: 'Why this number?',
    whyThisNumberBody: (binding: string) =>
      binding === 'absolute-floor'
        ? 'A party always needs at least 500 supporters, however small the area.'
        : binding === 'verified-residents'
          ? 'This is a share of the people in this area who have shown they are real.'
          : 'This is a share of the people who live in this area.',
    // Party-creation additions — emblem, charter, BR-020, FR-130, FR-077.
    emblemLabel: 'Party emblem',
    emblemHelp: 'A short symbol for your party. Up to 8 characters — for example, two or three letters.',
    jurisdictionSelectLabel: 'Area this party covers',
    jurisdictionSelectHelp: 'Choose the area your party will stand for. More areas will be added over time.',
    jurisdictionSelectPlaceholder: 'Select an area',
    nonViolenceTitle: 'Non-violence commitment',
    nonViolenceHelp:
      'Every party must include this statement. It cannot be removed or changed. ' +
      'This is the only restriction the platform places on what a party believes.',
    charterSectionTitle: 'Party rules',
    charterSectionHelp:
      'These are the rules your party will follow. The platform sets minimum standards. ' +
      'Your party can choose stricter rules, but not weaker ones.',
    // BR-020 disclosure: platform creation ≠ legal registration.
    platformNotLegalTitle: 'Creating a party here is not the same as legal registration',
    platformNotLegalBody:
      'Starting a party on this platform means your party exists here, where people can support it. ' +
      'It does not mean your party is legally registered with any government. ' +
      'We cannot grant or override legal recognition. You will need to follow your own country\'s ' +
      'rules for legal registration separately.',
    // FR-130 provisional status.
    provisionalLabel: 'Pre-legal-verification',
    provisionalCapHelpOpen: (cap: number) =>
      `This party is new and not yet legally registered. It can have up to ${cap} members for now. ` +
      `The limit lifts automatically when the party completes legal registration.`,
    provisionalCapHelpReached: (cap: number) =>
      `This party has reached its ${cap}-member limit for new parties that are not yet legally registered. ` +
      `No new members can join until the party completes legal registration.`,
    provisionalCapHelpLegal: 'This party is legally registered. There is no membership limit.',
    // Draft/publish feedback.
    draftSaved: 'Your draft has been saved.',
    petitionStarted: 'Your party is now open for support.',
    collisionName: 'A party or petition with this name already exists in your area.',
    collisionEmblem: 'A party or petition with this emblem already exists in your area.',
    cooldownActive: (reopensAt: number) =>
      `You filed a very similar party recently in this area. You can file again after ${new Date(reopensAt * 1000).toLocaleDateString()}.`,
  },
  proposals: {
    title: 'Decision',
    discussion: 'Being discussed',
    voting: 'Open for voting',
    tallying: 'Counting',
    defeated: 'Not passed',
    timelocked: 'Passed, waiting',
    executed: 'Done',
    cancelled: 'Withdrawn',
    barTitle: 'What this needs to pass',
    quorum: (pct: string) => `At least ${pct} of members must take part`,
    approval: (pct: string) => `At least ${pct} of those who choose a side must say yes`,
    tenure: (days: number) => `You must have been a member for ${days} days`,
    resultsHidden: 'No results are shown until voting closes.',
    resultsHiddenWhy: 'Early numbers change how people vote, so nobody sees them.',
    castVote: 'Cast your vote',
    choiceFor: 'Yes',
    choiceAgainst: 'No',
    choiceAbstain: 'Take part, but do not pick a side',
    submit: 'Send my vote',
  },
  vote: {
    confirmTitle: 'Your vote has been accepted',
    // DELIBERATELY choice-independent. See VoteConfirmation.tsx.
    confirmBody: 'Your vote was accepted and it will be counted.',
    changeVote: 'Change my vote',
    changeVoteHelp: 'You can change your vote as many times as you like until voting closes.',
    changeVoteWindow: (closes: string) => `You can change it until ${closes}.`,
    panic: 'Start again',
    panicHelp: 'Opens a fresh ballot.',
    done: 'Done',
  },
  banner: {
    notReceiptFreeTitle: 'Your vote is private, but it is not yet coercion-proof',
    notReceiptFreeBody:
      'Nobody can see that a vote was yours. But right now the counting happens in the open, so ' +
      'somebody standing over you could still work out how you voted from what is on your screen. ' +
      'The part that fixes this is not switched on yet. Do not vote in front of somebody who is ' +
      'pressuring you.',
    notReceiptFreeMore: 'What is missing',
  },
  errors: {
    title: 'Something is wrong',
    trustBoundary:
      'The fast copy of the data disagreed with the record itself. We stopped rather than show you ' +
      'a number that might be wrong.',
    anonymityTooSmall:
      'Too few people in your area have shown they are real, so acting here would point at you. We ' +
      'will use a wider area instead.',
    flagOff: 'This part is not switched on yet.',
    generic: 'We could not finish that. Nothing was sent.',
  },
  a11y: {
    progressLabel: (pct: number) => `Support: ${pct} per cent of the number needed`,
    errorSummary: (n: number) => `${n} things still need your attention`,
    externalLink: 'opens in a new tab',
    currentPage: 'Current page',
  },
};

/**
 * Widen the literal types `typeof en` infers.
 *
 * Without this, `Messages` is a type only the English file can satisfy: TypeScript infers
 * every string as its own literal, so `ar.ts` fails to typecheck for the crime of being in
 * Arabic. Widening leaf strings — while keeping the *shape*, the function signatures and
 * the `dir` union intact — gives us what we actually want: every locale must supply exactly
 * the same keys with the same argument lists, and may of course say different words.
 */
type Widen<T> = T extends 'ltr' | 'rtl'
  ? 'ltr' | 'rtl'
  : T extends string
    ? string
    : T extends (...args: infer A) => infer R
      ? (...args: A) => Widen<R>
      : T extends readonly (infer U)[]
        ? Widen<U>[]
        : T extends object
          ? { [K in keyof T]: Widen<T[K]> }
          : T;

export type Messages = Widen<typeof en>;
