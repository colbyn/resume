module Page.Projects exposing (projects)

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


projects = Type.rootSection
    [ Type.h1 "Projects"
    , Type.indent <| Type.section
        [ helmProject
        , otherProjects
        , legend
        ]
    ]

helmProject = Type.section
    [ Type.h2_ [ Type.a "https://github.com/SubSys/Compiler" "The Helm Language (i.e. Compiler)", Type.sup "‡"]
    , Type.indent <| Type.subsection
        [ Type.blockquote_
            [ Type.a "https://github.com/SubSys/Compiler" "https://github.com/SubSys/Compiler"
            ]
        , Type.p
            "A rather long term project of mine. The overall aspiration is to create a simple medium for CPU/(GP)GPU computing. Initially, intended to serve as the ‘beginner friendly’ language for a video game engine focused on streaming, or rather, more commonly known as ‘cloud gaming’."
        ]
    , Type.indent <| Type.subsection
        [ Type.h3 "Notable Components:"
        , Type.ul
            [ Type.li_
                [ Type.a_
                    "https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/Parser"
                    [Type.text "The Frontend Parser", Type.sup "*"]
                ]
            , Type.li_
                [ Type.a_
                    "https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/TypeCheck"
                    [Type.text "Type Inference/Type Checking", Type.sup "⁑"]
                ]
            , Type.li_
                [ Type.a_
                    "https://github.com/SubSys/Compiler/blob/master/src/CGIR/Rust/Dev/DryRun.hs"
                    [Type.text "The rust code-gen", Type.sup "⁂"]
                ]
            ]
        , Type.p
            "For more information regarding the compiler, the readme page should go much more in-depth on various details of interest (via the given link to the repository)."
        ]
    ]

otherProjects = Type.section
    [ Type.h2_ [Type.text "Other projects to ask about", Type.sup "‡"]
    , otherProjectsBody
    ]

otherProjectsBody = Type.updateAttrs (\ss -> ss ++ [C.paddingLeft <| C.px 22]) <| Type.ul
    [ Type.li_
        [ Type.p "Perceptual image hashing experiments"
        , Type.blockquote_
            <| List.singleton
            <| Type.appendStyles [C.paddingTop C.zero, C.paddingBottom C.zero]
            <| Type.p_
            <| List.singleton
            <| Type.a
                "https://github.com/colbyn/ContentID"
                "https://github.com/colbyn/ContentID"
        , Type.p "If this interests you, let me know ahead of time so I can clean up & recall the details (VIA reviewing a paper)..."
        ]
    , Type.li_ [Type.text "A CLI tool simular to ‘cargo-web’ for ghcjs.", Type.sup "†"]
    , Type.li_ [Type.text "A text editor compiled with ghcjs. So far all that works alright is my multi cursor implementation, since I just recently started this project.", Type.sup "†"]
    , Type.li_
        [ Type.p_ [Type.text "A simple ghc/ghcjs macro that generates function stubs when compiled with ghc.", Type.sup "†"]
        , Type.p
            "The elaborate, although this isn’t ideal, the purpose of the aforementioned macro is to declare JavaScript/ECMAScript FFI declarations that will compile with normal GHC. I.e. You declare your FFI declarations using the provided macros that will become regular JavaScript FFI declarations when compiled with GHCJS, and function declaration stubs when compiled with normal GHC."
        , Type.p
            "All it really does is not brake my beloved ghc based development tools."
        , Type.appendStyles [C.listStyle C.none] <| Type.liHeader "E.g."
            [ Type.codeBlock Type.Haskell macroExample
            ]
        ]
    ]

macroExample = String.trim """
[Call.jsFFI|
    appendChild :: Instance.Node -> Instance.Node -> IO Instance.Node
    $r = Node.prototype.appendChild.call($1, $2);  
|]
"""


legend = Type.appendStyles [C.marginTop (C.px 32)] <| Type.section
    [ Type.p_
        [ Type.text "* "
        , Type.a
            "https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/Parser"
            "https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/Parser"
        ]
    , Type.p_
        [ Type.text "⁑ "
        , Type.a
            "https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/TypeCheck"
            "https://github.com/SubSys/Compiler/tree/master/src/SLIR/HelmSyntax/Module/Core/TypeCheck"
        ]
    , Type.p_
        [ Type.text "⁂ "
        , Type.a
            "https://github.com/SubSys/Compiler/blob/master/src/CGIR/Rust/Dev/DryRun.hs"
            "https://github.com/SubSys/Compiler/blob/master/src/CGIR/Rust/Dev/DryRun.hs"
        ]
    , Type.p "Regarding ⁂: The dry-run/development compilation pipelines expect to be invoked in ‘stack ghci’."
    , Type.p "‡ If inclined to see, these are fairly presentable (something I quite enjoy doing). :)"
    , Type.p "† These projects will be open sourced as a whole when reasonably complete (or factored out). Likewise, if inclined to see, these are fairly presentable. "
    ]






