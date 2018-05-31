module Page.Employment exposing (employment)

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
-- ~




----------------------------------------------------------------------------------------
-- Employment
----------------------------------------------------------------------------------------

employment = Type.rootSection
    [ Type.h1 "Employment"
    , Type.indent <| Type.section
        [ spaceMonkey
        , galileo
        , uplynk
        , selfemployment
        ]
    ]

spaceMonkey = Type.section
    [ Type.h2 "Space Monkey"
    , Type.blockquote "Decentralized, p2p cloud storage."
    , Type.indent <| Type.subsection
        [ Type.p "Began when I was 17. Brief summer internship, under my mentor Tom Metge."
        ]
    ]

galileo = Type.section
    [ Type.h2 "Galileo"
    , Type.blockquote "Prepaid credit card processor."
    , Type.indent <| Type.subsection
        [ Type.p "17-18, Data Center Tech."
        ]
    ]

uplynk = Type.section
    [ Type.h2 "Uplynk/Verizon Digital Media Services"
    , Type.blockquote "Multimedia streaming backend for primarily broadcast providers (such as ABC, and ESPN)."
    , Type.indent <| Type.subsection
        [ Type.p "19-20, Jr. Developer."
        ]
    ]


selfemployment = Type.section
    [ Type.h2 "Self Employment"
    , Type.blockquote "See the following section “Projects”."
    , Type.indent <| Type.subsection
        [ Type.p "20-21 (current). todo..."
        ]
    ]








