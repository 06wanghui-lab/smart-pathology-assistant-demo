export const mockReviewNotes = [
  {
    id: 1,
    caseId: "CASE-001",
    slideId: "SLIDE-001",
    type: "slide-note",
    reviewer: "Dr A",
    reviewedAt: "2026-10-18T09:15:00Z",
    text: "H&E sections from this slide show fragmented prostatic needle-core tissue with a small focus of crowded atypical glands. The focus demonstrates nuclear enlargement and prominent nucleoli and corresponds to an AI-highlighted region. No definite cribriform architecture, perineural invasion, or extraprostatic extension is identified on this slide. Correlation with the remaining case slides and immunohistochemical findings is recommended.",
  },
  {
    id: 2,
    caseId: "CASE-001",
    slideId: "SLIDE-002",
    type: "slide-note",
    reviewer: "Dr B",
    reviewedAt: "2026-10-23T14:30:00Z",
    text: "Reviewed AI-highlighted regions. Findings are concordant.",
  },
  {
    id: 3,
    caseId: "CASE-002",
    slideId: "SLIDE-003",
    type: "slide-note",
    reviewer: "Dr C",
    reviewedAt: "2026-10-27T11:45:00Z",
    text: "No suspicious regions identified.",
  },
  {
    id: 4,
    caseId: "CASE-001",
    slideId: null,
    type: "case-note",
    reviewer: "Dr A",
    reviewedAt: "2026-10-25T10:00:00Z",
    text: `All submitted H&E-stained sections were reviewed together with the AI-highlighted regions.

Slide 1 shows multiple fragmented prostatic needle-core tissues containing crowded small acinar glands within a background of benign glands and patchy chronic inflammation.

Slide 2 contains a smaller focus of atypical glands with similar morphology, although interpretation is limited by tissue fragmentation.

No definite cribriform architecture, perineural invasion, lymphovascular invasion, or extraprostatic extension is identified. The findings should be correlated with the remaining case material and relevant immunohistochemical studies.`,
  },
  {
    id: 5,
    caseId: "CASE-001",
    slideId: null,
    type: "addendum",
    reviewer: "Dr A",
    reviewedAt: "2026-10-29T15:30:00Z",
    text: "Immunohistochemical stains were subsequently reviewed. The additional findings support the original case interpretation, with no change to the final diagnostic assessment.",
  },
  //   {
  //     id: 6,
  //     caseId: "CASE-002",
  //     slideId: null,
  //     type: "case-note",
  //     reviewer: "Dr C",
  //     reviewedAt: "2026-10-28T10:20:00Z",
  //     text: `Initial review of the submitted prostate needle-core sections has been completed.

  // Slide 3 shows predominantly benign prostatic glands with focal chronic inflammation. A small cluster of crowded glands is present, but the cytological and architectural features are insufficient for a definitive malignant diagnosis.

  // The remaining slides should be reviewed together with the AI-highlighted regions. Immunohistochemical stains may be considered if the atypical focus persists on deeper levels.`,
  //   },
  {
    id: 7,
    caseId: "CASE-001",
    slideId: null,
    type: "case-note",
    reviewer: "Dr B",
    reviewedAt: "2026-10-24T14:15:00Z",
    text: `Secondary review performed with attention to the AI-highlighted regions.

The highlighted focus on Slide 1 corresponds to a small proliferation of crowded atypical glands. Slide 2 contains a smaller focus with similar morphology, although assessment is limited by tissue fragmentation.

The findings are concordant with the initial interpretation. Correlation with immunohistochemical stains is recommended if clinically required.`,
  },
];
