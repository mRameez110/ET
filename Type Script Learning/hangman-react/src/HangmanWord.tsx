type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
    return (
    <div
      style={{
          display: "flex",
                gap: ".25em",
        fontSize: "6rem",
          fontWeight: "bold",
                textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >



