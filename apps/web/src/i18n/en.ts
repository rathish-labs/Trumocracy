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
    joinPrivate: 'The party is not given a list of its members. Nobody gets that list, including us.',
    joinConfirm: 'Join now',
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
