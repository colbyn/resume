module Page.Footer exposing (footer)



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





footer =
    let
        footerBorder = [ C.borderTop3 (C.px 1) C.solid (C.hex "#e0e0e0")]
        -- footerBorder = []
        innerStyling =
            [ C.display C.inlineFlex
            , C.flexDirection C.column
            , C.padding (C.px 10)
            , C.height (C.px 200)
            , C.alignItems C.center
            , C.justifyContent C.center
            ]
    in Type.wrapper footerBorder <| List.singleton <| Type.footer
        [ C.width (C.pct 100)
        , C.displayFlex
        , C.justifyContent C.spaceAround
        , C.maxWidth (C.px 860)
        , C.margin2 C.zero C.auto
        ]
        [ Type.wrapper innerStyling
            [ Type.h4 "Printer friendly version"
            , Type.appendStyles [C.fontSize (C.em 0.8)] <| Type.a
                "https://github.com/colbyn/resume/tree/master/assets/pre-built/forPrint.pdf"
                "https://github.com/colbyn/resume/tree/master/assets/pre-built/forPrint.pdf"
            ]
        , Type.wrapper innerStyling
            [ Type.h4_ [Type.text "Digital version", Type.badge "preferred"]
            , Type.p "(contains the “Design” section i.e. more information)"
            , Type.appendStyles [C.fontSize (C.em 0.8)] <| Type.a
                "https://github.com/colbyn/resume/tree/master/assets/pre-built/default.pdf"
                "https://github.com/colbyn/resume/tree/master/assets/pre-built/default.pdf"
            ]
        ]






