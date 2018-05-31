module Page.Skillset exposing (skillset)

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
-- Skillset
----------------------------------------------------------------------------------------


skillset = Type.rootSection
    [ Type.h1 "Skillset"
    , Type.indent <| Type.section
        [ functional
        , webTech
        , rust
        , unix
        , adaptation
        ]
    ]

functional = Type.subsection
    [ Type.h2 "Functional Programing"
    , Type.blockquote "If it’s not obvious already ;)"
    , Type.ul
        [ Type.li_ [Type.text "Haskell", Type.badge "expert beginner"]
        , Type.li_ [Type.text "Elm", Type.badge "proficient"]
        , Type.li_ [Type.text "PureScript", Type.badge "beginner"]
        ]
    ]

rust = Type.subsection
    [ Type.h2_ [Type.text "Rust", Type.badge "beginner"]
    , Type.p "I’m comfortable with the language, likewise I quite enjoy it’s type system. Not so with popular apis and the like, so i’m most certainly a beginner in this regard."
    ]

webTech = Type.subsection
    [ Type.h2 "Web Technologies"
    , Type.blockquote "To name a few."
    , Type.ul
        [ Type.li_ [Type.text "XML/HTML(5)", Type.badge "proficient"]
        , Type.li_ [Type.text "CSS(3)", Type.badge "proficient"]
        , Type.li_ [Type.text "SVG", Type.badge "proficient"]
        , Type.li_ [Type.text "JavaScript(ECMAScript)", Type.badge "proficient"]
        , Type.liHeader "Browser APIs"
            [ Type.li "HTML5 (various interfaces)"
            , Type.li "DOM level 3, and 4 (various interfaces)."
            , Type.li "A various multitude of extensions to the aforementioned interfaces."
            ]
        , Type.liHeader "WebIDL (sadly)"
            [ Type.li "A rather contrived, ad-hock sudo language that had better typing information for FFI bindings from a typed language (with regards to Mozilla's own API references)."
            ]
        ]
    ]

unix = Type.subsection
    [ Type.h2 "Unix"
    , Type.p "General unix concepts; though mostly practical knowledge such as the command line/cli tools, and shell scripting."
    ]

adaptation = Type.subsection
    [ Type.h2 "Adaptation"
    , Type.p "Although it’s been quite a while, I’m certainly adaptable with regards to relearning python and various other high level scripting languages."
    ]






