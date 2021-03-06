module Page exposing (view)

-- ~
import Html.Styled            as H
import Html.Styled.Attributes as A
import Html.Styled.Events     as E
import Svg.Styled             as S
import Svg.Styled.Attributes  as SA
import Css                    as C
import Css.Colors             as Color
import Css.Media              as Media

-- + Local
import UI.Typography as Type

-- + Sub Pages
import Page.Projects   as Page
import Page.Employment as Page
import Page.Skillset   as Page
import Page.Design     as Page
import Page.Footer     as Page
import Page.Header     as Page
import Page.School     as Page
-- ~





view model = H.div
    [ A.css
        [ C.backgroundColor (C.hex "#fff")
        , C.marginBottom C.zero
        , C.displayFlex
        , C.flexDirection C.column
        , C.height (C.pct 100)
        -- , C.padding (C.px 10)
        -- , C.marginBottom (C.px 500)
        ]
    ]
    <| List.map Type.renderElement
        [ Page.header
        , Page.employment
        , Page.projects
        , Page.skillset
        , Page.school
        -- , Page.design
        , Page.footer
        ]



