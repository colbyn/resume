module UI.Typography exposing (..)


-- ~
import Html.Styled            as H
import Html.Styled.Attributes as A
import Html.Styled.Events     as E
import Svg.Styled             as S
import Svg.Styled.Attributes  as SA
import Css                    as C
import Css.Colors             as Color
import Markdown
import VirtualDom

import Html.Attributes as HA


-- + Local
-- ~





type Element
    = Display DisplayType (List C.Style) (List Element)
    | Layout LayoutType (List C.Style) (List Element)
    | Code Position Language (List C.Style) String
    | Text String


type DisplayType
    = H1
    | H2
    | H3
    | H4
    | P
    | UL
    | LI
    | Blockquote
    | Sup
    | Sub
    | A String
    | Img String
    | Badge
    | Span


type Position
    = Inline
    | Block

type LayoutType
    = Indent
    | Section
    | Wrapper
    | Footer

type Language
    = Haskell
    | Elm


type Type
    = TextType
    | CodeType Position
    | DisplayType DisplayType
    | LayoutType LayoutType



-------------------------------------------------------------------------------
-- Utils
-------------------------------------------------------------------------------
 

updateAttrs : (List C.Style -> List C.Style) -> Element -> Element
updateAttrs f element =
    case element of
        Text x -> Text x
        Code pos x y z -> Code pos x y z
        Layout lt ss es -> Layout lt (f ss) es
        Display dt ss es -> Display dt (f ss) es

updateAttrsIf : (List C.Style -> List C.Style) -> (Element -> Bool) -> Element -> Element
updateAttrsIf f pred e =
    if pred e then
        updateAttrs f e
    else
        e

updateAttrsFor : (List C.Style -> List C.Style) -> (Element -> Bool) -> List Element -> List Element
updateAttrsFor f pred xs =
    case xs of
        [] -> []
        (e::es) ->
            if pred e then
                updateAttrs f e :: updateAttrsFor f pred es
            else
                e :: updateAttrsFor f pred es


appendStyles : List C.Style -> Element -> Element
appendStyles ss = updateAttrs (\xs -> xs ++ ss)


updateAll : (Type -> List C.Style -> List C.Style) -> Element -> Element
updateAll f e = case e of
    Text x -> Text x
    Code pos x ss z -> Code pos x (f (CodeType pos) ss) z
    Layout lt ss es -> Layout lt (f (LayoutType lt) ss) (List.map (updateAll f) es)
    Display dt ss es -> Display dt (f (DisplayType dt) ss) (List.map (updateAll f) es)



invert : Element -> Element
invert = updateAll invertIter

invertIter : Type -> List C.Style -> List C.Style
invertIter ty ss =
    let header = [ C.color (C.hex "#fff")]
        default = [C.color (C.hex "#dadada")]
    in
        case ty of
            DisplayType H1 -> ss ++ header
            DisplayType H2 -> ss ++ header
            DisplayType H3 -> ss ++ header
            DisplayType H4 -> ss ++ header
            DisplayType P -> ss ++ default
            DisplayType UL -> ss ++ default
            DisplayType LI -> ss ++ default
            DisplayType Blockquote -> ss ++ default
            DisplayType Sup -> ss ++ default
            DisplayType Sub -> ss ++ default
            DisplayType (A _) -> ss ++ default
            _ -> ss ++ default







--
-- Preds
--

isSup = isOfType (DisplayType Sup)
isSub = isOfType (DisplayType Sub)






-------------------------------------------------------------------------------
-- Internal Utils/Helpers
-------------------------------------------------------------------------------


isOfType : Type -> Element -> Bool
isOfType dt e = case (dt, e) of
    (DisplayType dt, Display dt_ _ _) -> dt == dt_
    (CodeType pos, Code _ _ _ _ ) -> True
    (TextType, Text _) -> True
    _ -> False


fontBase : C.Style
fontBase = C.batch
    [ C.property "font-family" "Source Sans Pro"
    , C.color (C.hex "#5a5a5a")
    ]




-------------------------------------------------------------------------------
-- Base Elements
-------------------------------------------------------------------------------


text : String -> Element
text txt = Text txt



-------------------------------------------------------------------------------
-- Code Elements
-------------------------------------------------------------------------------

codeBlock lang txt = Code Block lang [] txt


codeRaw lang body = H.fromUnstyled
    <| Markdown.toHtml [HA.class "nodecors"]
    <| String.join "\n" ["```", body, "```"]


lang2String : Language -> String
lang2String lang = case lang of
    Haskell -> "haskell"
    Elm -> "elm"

-------------------------------------------------------------------------------
-- Headings
-------------------------------------------------------------------------------


h1 : String -> Element
h1 txt = h1_
    [ text txt
    ]

h2 : String -> Element
h2 txt = h2_
    [ text txt
    ]

h3 : String -> Element
h3 txt = h3_
    [ text txt
    ]

h4 : String -> Element
h4 txt = h4_
    [ text txt
    ]


h1_ : List Element -> Element
h1_ es = Display H1
    [ fontBase
    , headerBase
    , C.fontSize (C.em 1.8)
    ]
    (List.map h1Child es)

h2_ : List Element -> Element
h2_ es = Display H2
    [ fontBase
    , headerBase
    , C.fontSize (C.em 1.4)
    ]
    (List.map h2Child es)

h3_ : List Element -> Element
h3_ es = Display H3
    [ fontBase
    , headerBase
    , C.fontSize (C.em 1.2)
    ]
    (List.map h3Child es)

h4_ : List Element -> Element
h4_ es = Display H4
    [ fontBase
    , headerBase
    , C.fontSize (C.em 1.8)
    ]
    (List.map h4Child es)



-- 
-- Internal Helpers
--

-- Update Children

-- h1Children : List Element -> List Element
-- h1Children xs = List.map h1ChildUpdates


h1Child : Element -> Element
h1Child e =
    let inlineExts = [C.fontSize <| C.em 1.2, C.fontWeight <| C.int 400]
        ifSup = updateAttrsIf (\xs -> xs ++ inlineExts) isSup
        ifSub = updateAttrsIf (\xs -> xs ++ inlineExts) isSub
    in e
        |> updateAttrs (\ss -> ss ++ [headerBase])
        |> ifSup
        |> ifSub


h2Child : Element -> Element
h2Child e =
    let inlineExts = [C.fontSize <| C.em 0.9, C.fontWeight <| C.int 400]
        ifSup = updateAttrsIf (\xs -> xs ++ inlineExts) isSup
        ifSub = updateAttrsIf (\xs -> xs ++ inlineExts) isSub
    in e
        |> updateAttrs (\ss -> ss ++ [headerBase])
        |> ifSup
        |> ifSub

h3Child : Element -> Element
h3Child e =
    let inlineExts = [C.fontSize <| C.em 0.8, C.fontWeight <| C.int 400]
        ifSup = updateAttrsIf (\xs -> xs ++ inlineExts) isSup
        ifSub = updateAttrsIf (\xs -> xs ++ inlineExts) isSub
    in e
        |> updateAttrs (\ss -> ss ++ [headerBase])
        |> ifSup
        |> ifSub


h4Child : Element -> Element
h4Child e =
    let inlineExts = [C.fontSize <| C.em 0.7, C.fontWeight <| C.int 400]
        ifSup = updateAttrsIf (\xs -> xs ++ inlineExts) isSup
        ifSub = updateAttrsIf (\xs -> xs ++ inlineExts) isSub
    in e
        |> updateAttrs (\ss -> ss ++ [headerBase])
        |> ifSup
        |> ifSub



-- Base Styling
headerBase = C.batch
    [ C.property "font-family" "Source Sans Pro"
    , C.color (C.hex "#808080")
    ]


-------------------------------------------------------------------------------
-- Paragraph Elements
-------------------------------------------------------------------------------


p : String -> Element
p txt = p_
    [ text txt
    ]

p_ : List Element -> Element
p_ es = Display P
    [ fontBase
    -- , C.marginBottom (C.px 8)
    , C.color (C.hex "#5a5a5a")
    ]
    es



--
-- Inline Paragraph Elements
--

span : String -> Element
span txt = Display Span
    [ C.fontSize C.inherit
    , C.color C.inherit
    ]
    [ text txt
    ]





-------------------------------------------------------------------------------
-- Lists
-------------------------------------------------------------------------------

ul : List Element -> Element
ul xs = Display UL
    [ C.marginLeft (C.px 42)
    , C.padding C.zero
    ]
    xs

li : String -> Element
li txt = li_ [text txt]


li_ : List Element -> Element
li_ xs = Display LI
    [ fontBase
    , listItemBase
    ]
    (List.map (updateAttrs liStyleUpdate) xs)

liHeader : String -> (List Element) -> Element
liHeader txt es = liHeader_
    (text txt)
    es

liHeader_ : Element -> (List Element) -> Element
liHeader_ root children = Display LI
    [ fontBase
    , listItemBase
    ]
    [ (updateAttrs liStyleUpdate root)
    , ul children
    ]

--
-- Internal Helpers
--

liStyleUpdate : List C.Style -> List C.Style
liStyleUpdate xs =
    xs ++ [C.padding C.zero]


listItemBase = C.batch
    [ C.listStyle C.disc
    , C.listStyleType C.disc
    , C.color (C.hex "#6d6d6d")
    ]





-------------------------------------------------------------------------------
-- Etc
-------------------------------------------------------------------------------

blockquote : String -> Element
blockquote txt = blockquote_
    [ text txt
    ]

blockquote_ : List Element -> Element
blockquote_ es = Display Blockquote
    [ fontBase
    , C.borderLeft3 (C.px 4) C.solid (C.hex "#c7c7c7")
    , C.paddingLeft (C.px 2)
    , C.marginLeft (C.px 2)
    , C.paddingLeft (C.px 4)
    , C.color (C.hex "#848484")
    ]
    es


sub : String -> Element
sub txt = Display Sub
    [ fontBase
    ]
    [ text txt
    ]

sup : String -> Element
sup txt = Display Sup
    [ fontBase
    ]
    [ text txt
    ]

a : String -> String -> Element
a src txt = a_ src [text txt]


a_ : String -> List Element -> Element
a_ src es = Display (A src)
    [ fontBase
    ]
    es


img : String -> Element
img link = Display (Img link)
    [ C.width (C.pct 75)
    , C.margin2 C.zero C.auto
    , C.display C.block
    ]
    []



badge : String -> Element
badge txt = Display Badge
    [ fontBase
    , C.padding (C.px 2)
    , C.fontSize (C.em 0.7)
    , C.height (C.pct 100)
    , C.marginLeft (C.px 8)
    , C.padding4 (C.px 1) (C.px 3) (C.px 1) (C.px 3)
    , C.color (C.hex "#868686")
    , C.border3 (C.px 1) C.solid (C.hex "#fff")
    , C.property "box-shadow" "0 0 1px 0px #a0a0a0"
    , C.fontWeight (C.int 300)
    , C.borderRadius (C.px 3)
    ]
    [ text txt
    ]


-------------------------------------------------------------------------------
-- Layout Related
-------------------------------------------------------------------------------


indent =
    let styling =
        [ C.paddingLeft (C.px 42)
        ]
    in
        updateAttrs (\ss -> ss ++ styling)

section xs = Layout Section
    [ C.marginBottom (C.px 8)
    ]
    xs

subsection xs = Layout Section
    [ C.marginBottom (C.px 4)
    ]
    xs


rootSection xs = Layout Section
        [ C.padding (C.px 10)
        ]
        [ wrapper
            [ C.maxWidth (C.px 860)
            , C.margin2 C.zero C.auto
            ]
            xs
        ]


-- generic wrapper
wrapper ss xs = Layout Wrapper ss xs



footer ss xs = Layout Footer ss xs



-------------------------------------------------------------------------------
-- Render Typographic Tree
-------------------------------------------------------------------------------


renderElement e = case e of
    -- Display Nodes
    Display H1 ss es -> H.h1 [A.css ss] (List.map renderElement es)
    Display H2 ss es -> H.h2 [A.css ss] (List.map renderElement es)
    Display H3 ss es -> H.h3 [A.css ss] (List.map renderElement es)
    Display H4 ss es -> H.h4 [A.css ss] (List.map renderElement es)
    Display P ss es  -> H.p [A.css ss] (List.map renderElement es)
    Display UL ss es -> H.ul [A.css ss] (List.map renderElement es)
    Display LI ss es -> H.li [A.css ss] (List.map renderElement es)
    Display Blockquote ss es -> H.blockquote [A.css ss] (List.map renderElement es)
    Display Sup ss es  -> H.sup [A.css ss] (List.map renderElement es)
    Display Sub ss es  -> H.sub [A.css ss] (List.map renderElement es)
    Display (A src) ss es  -> H.a [A.css ss, A.href src] (List.map renderElement es)
    Display (Img link) ss es  -> H.img [A.css ss, A.src link] (List.map renderElement es)
    Display Badge ss es -> H.span [A.css ss] (List.map renderElement es)
    Display Span ss es -> H.span [A.css ss] (List.map renderElement es)
    -- Text Nodes
    Text x -> H.text x
    -- Code Nodes
    Code pos lang ss x -> H.div [A.css ss] [codeRaw (lang2String lang) x]
    -- Layout Nodes
    Layout Indent ss es -> H.div [A.css ss] (List.map renderElement es)
    Layout Section ss es -> H.section [A.css ss] (List.map renderElement es)
    Layout Wrapper ss es -> H.div [A.css ss] (List.map renderElement es)
    Layout Footer ss es -> H.footer [A.css ss] (List.map renderElement es)



