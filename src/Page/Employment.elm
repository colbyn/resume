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
    , intro
        "Decentralized, p2p cloud storage."
        "2012"
        "16"
    , Type.indent <| Type.subsection
        [ Type.p "Brief summer internship, under my mentor Tom Metge (when their office was located in Murray)."
        ]
    ]

galileo = Type.section
    [ Type.h2 "Galileo"
    -- , Type.blockquote "Prepaid credit card processor."
    , intro
        "Prepaid credit card processor."
        "2014 - 2015"
        "17 - 18"
    , Type.indent <| Type.subsection
        [ Type.p "Data Center Tech."
        ]
    ]

uplynk = Type.section
    [ Type.h2 "Uplynk/Verizon Digital Media Services"
    -- , Type.blockquote "Multimedia streaming backend for primarily broadcast providers (such as ABC, and ESPN)."
    , intro
        "Multimedia streaming backend for primarily broadcast providers (such as ABC, and ESPN)."
        "2015 - 2017"
        "19 - 20"
    , Type.indent <| Type.subsection
        [ Type.p "Jr. Developer."
        ]
    ]


selfemployment = Type.section
    [ Type.h2 "Self Employment"
    , introCurrent
        "See the following section “Projects”."
        "2017 - 2018"
        "20 - 21"
    , Type.indent <| Type.subsection
        [ Type.p ""
        ]
    ]



intro name date age = Type.blockquote_
    [ Type.text name
    , Type.badgeField date age
    ]

introCurrent name date age = Type.blockquote_
    [ Type.text name
    , Type.badgeField date age
    , Type.badge "Current"
    ]





