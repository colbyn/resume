module Core.Model exposing (Model, init, initModel)


-- ~
-- + Project Prelude
import Data.UI     as UI
import Data.Either as Either exposing (Either)

-- + Local
import Core.Effects.Msg   as Core
import Entries.Model as Entries
-- ~


type alias Model =
    { entries : Entries.Model
    }

init : (Model, Cmd Core.Msg)
init = (initModel, Cmd.none)


initModel : Model
initModel =
    { entries = Entries.initModel
    }


