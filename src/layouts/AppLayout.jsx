import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { mockCases } from "../data/mockCases";
import { mockReviewNotes } from "../data/mockReviewNotes";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import DisclaimerBanner from "../components/DisclaimerBanner";

export default function AppLayout() {
  const { pathname } = useLocation();
  const showDisclaimer = pathname === "/" || pathname === "/cases";
  const [cases, setCases] = useState(mockCases);
  const [reviewNotes, setReviewNotes] = useState(mockReviewNotes);
  const user = {
    userId: "demo-user",
    username: "demo",
    name: "Demo User",
    role: "DEMO",
  };
  const completeCaseReview = (caseId) => {
    const hasCaseNote = reviewNotes.some(
      (note) =>
        note.caseId === caseId &&
        note.slideId === null &&
        note.type === "case-note",
    );

    // Protect against completing a case with no case note.
    if (!hasCaseNote) {
      return false;
    }

    setCases((currentCases) =>
      currentCases.map((caseItem) =>
        caseItem.id === caseId
          ? {
              ...caseItem,
              reviewStatus: "reviewed",
            }
          : caseItem,
      ),
    );

    return true;
  };

  return (
    <Box minH="100dvh" bg="app.background" color="app.text">
      <Header user={user} />
      {showDisclaimer && <DisclaimerBanner />}

      <Box as="main" p={{ base: "3", lg: "4" }}>
        <Outlet
          context={{
            user,
            cases,
            setCases,
            reviewNotes,
            setReviewNotes,
            completeCaseReview,
          }}
        />
      </Box>
    </Box>
  );
}
