module Core.View exposing (view)


-- ~
import Html.Styled            as H
import Html.Styled.Attributes as A
import Html.Styled.Events     as E
import Svg.Styled             as S
import Svg.Styled.Attributes  as SA
import Css                    as C
import Css.Colors             as Color

-- + Local
import Page
-- ~



view model =
    Page.view model
    -- Entries.view Entries.initModel



