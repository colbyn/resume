module Page.School exposing (school)

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
-- ~



school = Type.rootSection
    [ Type.h1 "School"
    , Type.indent <| Type.section
        [ matc
        , westlake
        ]
    ]

matc = Type.section
    [ Type.h2 "MATC"
    , Type.blockquote_
        [ Type.text "Basic IT certifications (special high school program)."
        , Type.badgeField "2011 - 2012" "16"
        ]
    ]



westlake = Type.section
    [ Type.h2 "Westlake"
    , Type.blockquote_
        [ Type.badgeField "Graduated 2014" "17"
        ]
    ]

