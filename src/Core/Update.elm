module Core.Update exposing (update)


-- ~
-- + Project Prelude
import Data.UI     as UI
import Data.Either as Either exposing (Either)

-- + Local
import Core.Effects.Msg as Core
import Core.Model       as Core
-- ~


update : Core.Msg -> Core.Model -> (Core.Model, Cmd Core.Msg)
update msg model =
    (model, Cmd.none)


