module Page.Design exposing (design)

-- ~
import Html.Styled            as H
import Html.Styled.Attributes as A
import Html.Styled.Events     as E
import Svg.Styled             as S
import Svg.Styled.Attributes  as SA
import Css                    as C
import Css.Colors             as Color

-- + Local
import UI.Typography as Type

-- + Sub Pages
import Page.Projects   as Page
import Page.Employment as Page
import Page.Skillset   as Page
-- ~




----------------------------------------------------------------------------------------
-- Design
----------------------------------------------------------------------------------------


design = Type.appendStyles designStyling <| Type.invert <| Type.rootSection
    [ Type.h1_ [Type.text "Design", Type.badge "beginner"]
    , Type.p "Mostly limited to UI interfaces."
    , Type.indent <| Type.subsection
        [ Type.h2 "Example:"
        , Type.blockquote "layout prototype I’m working on for a project"
        ]
    , Type.img "assets/preview/notebook/layout.png"
    , Type.appendStyles [C.textAlign C.center] <| Type.p "The above is based on an old idea, with renewed interest. With regards to the old notebook concept (pardon the syntax error):"
    , Type.img "assets/preview/notebook/unnamed-1.png"
    ]


--
-- Design Styling
--

designStyling =
    [ C.backgroundColor (C.hex "#676767")
    ]







