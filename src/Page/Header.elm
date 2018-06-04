module Page.Header exposing (header)


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
-- ~



header =
    let
        outerStyling =
            [ 
            ]
        innerStyling =
            [ C.display C.inlineFlex
            , C.flexDirection C.column
            , C.padding (C.px 10)
            , C.height (C.px 200)
            , C.alignItems C.center
            , C.justifyContent C.center
            -- , C.width (C.pct 100)
            ]
    in Type.wrapper outerStyling <| List.singleton <| Type.wrapper
        [ C.width (C.pct 100)
        , C.displayFlex
        , C.justifyContent C.spaceAround
        , C.maxWidth (C.px 860)
        , C.margin2 C.zero C.auto
        ]
        [ Type.wrapper innerStyling
            [ 
            ]
        , headerCenter innerStyling
        , Type.wrapper innerStyling
            [ 
            ]
        ]


headerCenter baseStyling =
    let wrapperStyling =
            [
            ]
        h1Styling =
            [ C.fontSize (C.em 3)
            , C.textAlign C.center
            ]
        h2Styling =
            [ C.fontSize (C.em 2.5)
            , C.textAlign C.center
            , C.fontWeight (C.int 200)
            ]
    in Type.wrapper
        (baseStyling ++ [ C.displayFlex
        , C.flexDirection C.column
        ])
        [ Type.wrapper
            wrapperStyling
            [ Type.appendStyles h1Styling <|
                Type.h1 "Colbyn Wadman" 
            ]
        , Type.wrapper
            wrapperStyling
            [ Type.appendStyles h2Styling <|
                Type.h2 "Developer" 
            ]
        ]



