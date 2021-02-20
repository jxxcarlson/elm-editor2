module Config exposing (fileServer, pdfServer, saveFileInterval)

import Model exposing (FileArchive(..))


saveFileInterval =
    5



-- seconds


fileServer =
    "http://localhost:8077"


pdfServer =
    "https://shoobox.io"


fileArcive =
    Server
