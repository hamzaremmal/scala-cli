"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5871],{9705:function(e,a,n){n.d(a,{m:function(){return r},v:function(){return l}});var t=n(7294),i=n(2004);function l(e){var a=e.children;return t.createElement("div",{className:"runnable-command"},a)}function r(e){var a=e.url;return t.createElement(i.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:a})}},5782:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var t=n(3117),i=n(102),l=(n(7294),n(3905)),r=n(9705),o=["components"],s={title:"Migrating from the old Scala runner",sidebar_position:15},p="Migrating from the old scala runner",c={unversionedId:"guides/old-runner-migration",id:"guides/old-runner-migration",title:"Migrating from the old Scala runner",description:"As of SIP-46, Scala CLI has been accepted as the new scala",source:"@site/docs/guides/old-runner-migration.md",sourceDirName:"guides",slug:"/guides/old-runner-migration",permalink:"/docs/guides/old-runner-migration",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/old-runner-migration.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Migrating from the old Scala runner",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Scala Toolkit",permalink:"/docs/guides/toolkit"},next:{title:"Scripts",permalink:"/docs/guides/scripts"}},d={},m=[{value:"How to test Scala CLI as the new <code>scala</code> command?",id:"how-to-test-scala-cli-as-the-new-scala-command",level:2},{value:"How has the passing of arguments been changed from the old <code>scala</code> runner to Scala CLI?",id:"how-has-the-passing-of-arguments-been-changed-from-the-old-scala-runner-to-scala-cli",level:2},{value:"The old ways",id:"the-old-ways",level:3},{value:"The ways of Scala CLI",id:"the-ways-of-scala-cli",level:3},{value:"The Scala CLI <code>shebang</code> sub-command",id:"the-scala-cli-shebang-sub-command",level:3},{value:"How are the old <code>scala</code> runner options supported?",id:"how-are-the-old-scala-runner-options-supported",level:2},{value:"Fully supported old <code>scala</code> runner options",id:"fully-supported-old-scala-runner-options",level:3},{value:"Old <code>scala</code> runner options which have a different meaning in Scala CLI",id:"old-scala-runner-options-which-have-a-different-meaning-in-scala-cli",level:3},{value:"Deprecated and unsupported old <code>scala</code> runner options",id:"deprecated-and-unsupported-old-scala-runner-options",level:3},{value:"Scala compiler options",id:"scala-compiler-options",level:3},{value:"How does Scala CLI detect if it&#39;s running a script or a main method?",id:"how-does-scala-cli-detect-if-its-running-a-script-or-a-main-method",level:2},{value:"Main class in a <code>.scala</code> input",id:"main-class-in-a-scala-input",level:3},{value:"Main class in a <code>.sc</code> input",id:"main-class-in-a-sc-input",level:3},{value:"Script syntax in an <code>.sc</code> file",id:"script-syntax-in-an-sc-file",level:3},{value:"Script syntax in a <code>.scala</code> file",id:"script-syntax-in-a-scala-file",level:3},{value:"Inputs with no extension",id:"inputs-with-no-extension",level:3},{value:"How to migrate scripts with the old <code>scala</code> runner in the shebang header to Scala CLI?",id:"how-to-migrate-scripts-with-the-old-scala-runner-in-the-shebang-header-to-scala-cli",level:2},{value:"Example shebang script with the Scala <code>2.13.x</code> old <code>scala</code> runner",id:"example-shebang-script-with-the-scala-213x-old-scala-runner",level:3},{value:"Example shebang script with the Scala <code>3.x</code> old <code>scala</code> runner",id:"example-shebang-script-with-the-scala-3x-old-scala-runner",level:3},{value:"Example shebang script with Scala CLI",id:"example-shebang-script-with-scala-cli",level:3}],h={toc:m};function u(e){var a=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"migrating-from-the-old-scala-runner"},"Migrating from the old ",(0,l.kt)("inlineCode",{parentName:"h1"},"scala")," runner"),(0,l.kt)("p",null,"As of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scala/improvement-proposals/pull/46"},"SIP-46"),", Scala CLI has been accepted as the new ",(0,l.kt)("inlineCode",{parentName:"p"},"scala"),"\ncommand."),(0,l.kt)("p",null,"In that context, the purpose of this guide is to highlight the key differences between the old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," script\nand Scala CLI to make the migration as smooth as possible for users."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you are looking for an overview of Scala CLI basics, refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/commands/basics"},"the Basics page"),".\nIf you merely want to get started with Scala CLI, you might want to first look\nat ",(0,l.kt)("a",{parentName:"p",href:"/docs/getting_started"},"the Getting started page"),".")),(0,l.kt)("h2",{id:"how-to-test-scala-cli-as-the-new-scala-command"},"How to test Scala CLI as the new ",(0,l.kt)("inlineCode",{parentName:"h2"},"scala")," command?"),(0,l.kt)("p",null,"There is a dedicated ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-experimental")," distribution of Scala CLI, which can install it as ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," on your machine.\nFor instructions on how to try it out, refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/scala-command/"},"the relevant doc"),"."),(0,l.kt)("h2",{id:"how-has-the-passing-of-arguments-been-changed-from-the-old-scala-runner-to-scala-cli"},"How has the passing of arguments been changed from the old ",(0,l.kt)("inlineCode",{parentName:"h2"},"scala")," runner to Scala CLI?"),(0,l.kt)("p",null,"Let us take a closer look on how the old runner handled arguments when compared to Scala CLI."),(0,l.kt)("h3",{id:"the-old-ways"},"The old ways"),(0,l.kt)("p",null,"In the old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner, the first argument was treated as the input source, while the second and following arguments\nwere considered program arguments."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala Source.scala programArg1 programArg2\n")),(0,l.kt)("p",null,"Since everything after the first argument had to be arbitrarily read as a program argument, regardless of format, all\nrunner options had to be passed before the source input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala -save script.sc programArg1 programArg2\n")),(0,l.kt)("h3",{id:"the-ways-of-scala-cli"},"The ways of Scala CLI"),(0,l.kt)("p",null,"With Scala CLI's default way of handling arguments, inputs and program arguments have to be\ndivided by ",(0,l.kt)("inlineCode",{parentName:"p"},"--"),". There is no limit for the number of either."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli Source1.scala Source2.scala -- programArg1 programArg2\n")),(0,l.kt)("p",null,"Additionally, a Scala CLI sub-command can be passed before the inputs section.\nFor example, to call the above example specifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," sub-command explicitly, pass it like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli run Source1.scala Source2.scala -- programArg1 programArg2\n")),(0,l.kt)("p",null,"More on sub-commands can be found ",(0,l.kt)("a",{parentName:"p",href:"/docs/commands/basics"},"here"),"."),(0,l.kt)("p",null,"Runner options can be passed on whatever position in the inputs section (before ",(0,l.kt)("inlineCode",{parentName:"p"},"--"),").\nFor example, all the following examples are correct ways to specify the Scala version explicitly as ",(0,l.kt)("inlineCode",{parentName:"p"},"3.2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli -S 3.2 Source1.scala Source2.scala -- programArg1 programArg2\nscala-cli Source1.scala -S 3.2 Source2.scala -- programArg1 programArg2\nscala-cli Source1.scala Source2.scala -S 3.2 -- programArg1 programArg2\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The exception to this rule are the launcher options, like ",(0,l.kt)("inlineCode",{parentName:"p"},"--power")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--cli-version"),".\nThose have to be passed before the inputs section (before any source inputs)."),(0,l.kt)("p",{parentName:"admonition"},"For example, to explicitly specify the launcher should run Scala CLI ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.1.20"),", pass it like this:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli --cli-version 0.1.20 Source1.scala Source2.scala -- programArg1 programArg2\n")),(0,l.kt)("p",{parentName:"admonition"},"Also, if a Scala CLI sub-command is being passed explicitly, all launcher options have to be passed before the\nsub-command. This is especially important for ",(0,l.kt)("inlineCode",{parentName:"p"},"power")," mode commands, as those need to be called with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--power"),"\nlauncher option."),(0,l.kt)("p",{parentName:"admonition"},"For example, to call ",(0,l.kt)("a",{parentName:"p",href:"/docs/commands/package"},"the ",(0,l.kt)("inlineCode",{parentName:"a"},"package")," sub-command"),", do it like this:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --power package --help\n"))),(0,l.kt)("h3",{id:"the-scala-cli-shebang-sub-command"},"The Scala CLI ",(0,l.kt)("inlineCode",{parentName:"h3"},"shebang")," sub-command"),(0,l.kt)("p",null,"To provide better support for shebang scripts, Scala CLI\nhas ",(0,l.kt)("a",{parentName:"p",href:"/docs/commands/shebang"},"a dedicated ",(0,l.kt)("inlineCode",{parentName:"a"},"shebang")," sub-command"),", which handles arguments similarly to the old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala"),"\nscript."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli shebang Source.scala programArg1 programArg2\n")),(0,l.kt)("p",null,"The purpose of the ",(0,l.kt)("inlineCode",{parentName:"p"},"shebang")," sub-command is essentially to only be used in a shebang header (more\ndetails on that can be found ",(0,l.kt)("a",{parentName:"p",href:"#example-shebang-script-with-scala-cli"},"in a later section of this guide")," or in the\nseparate ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/shebang"},"shebang scripts' guide"),"), but nothing is really stopping you from using it from the command\nline, if you're used to how the old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner handled arguments. Just bear in mind that it is not the intended user\nexperience."),(0,l.kt)("h2",{id:"how-are-the-old-scala-runner-options-supported"},"How are the old ",(0,l.kt)("inlineCode",{parentName:"h2"},"scala")," runner options supported?"),(0,l.kt)("p",null,"For backwards compatibility's sake, Scala CLI accepts all the old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner options, although many of them have\nbeen deprecated and are no longer supported in the new runner. This includes accepting all the Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x"),"\nrespective runners' specific options."),(0,l.kt)("h3",{id:"fully-supported-old-scala-runner-options"},"Fully supported old ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala")," runner options"),(0,l.kt)("p",null,"The following old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner options are fully supported by Scala CLI, meaning that they deliver similar or expanded\nfunctionalities with backwards-compatible syntax:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e"),", which is an alias for Scala CLI's ",(0,l.kt)("inlineCode",{parentName:"li"},"--execute-script")," and a close synonym\nfor ",(0,l.kt)("a",{parentName:"li",href:"/docs/guides/snippets#examples"},(0,l.kt)("inlineCode",{parentName:"a"},"--script-snippet"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-v")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"-verbose")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"--verbose"),", which can be passed multiple times with Scala CLI, increasing the verbosity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-cp")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"-classpath")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"--class-path"),", which adds compiled classes and jars to the class path"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-version")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"--version"),", which prints the currently run Scala CLI ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/version"},"version information")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-with-compiler"),", which adds the Scala compiler dependency to the Scala CLI project"),(0,l.kt)("li",{parentName:"ul"},"Scala compiler options (with some requiring to be passed with ",(0,l.kt)("inlineCode",{parentName:"li"},"-O"),", more info\nin ",(0,l.kt)("a",{parentName:"li",href:"#scala-compiler-options"},"the section below"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-J<arg>")," Java options"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Dname=prop")," Java properties")),(0,l.kt)("h3",{id:"old-scala-runner-options-which-have-a-different-meaning-in-scala-cli"},"Old ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala")," runner options which have a different meaning in Scala CLI"),(0,l.kt)("p",null,"The following old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner options not only are not supported with their old functionalities, but have a different\nmeaning in Scala CLI:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-i"),", which is now an alias for Scala CLI's ",(0,l.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#--interactive"},(0,l.kt)("inlineCode",{parentName:"a"},"--interactive")," mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"-help"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"in the old Scala ",(0,l.kt)("inlineCode",{parentName:"li"},"2.13.x")," ",(0,l.kt)("inlineCode",{parentName:"li"},"scala")," runner, it used to print the help of the runner"),(0,l.kt)("li",{parentName:"ul"},"in the old Scala ",(0,l.kt)("inlineCode",{parentName:"li"},"3.x")," ",(0,l.kt)("inlineCode",{parentName:"li"},"scala")," runner however, it used to print the Scala compiler help instead"),(0,l.kt)("li",{parentName:"ul"},"Scala CLI takes an approach similar to the old Scala ",(0,l.kt)("inlineCode",{parentName:"li"},"2.13.x")," runner, and it prints Scala CLI help"),(0,l.kt)("li",{parentName:"ul"},"to view the Scala compiler help with Scala CLI, pass\nthe ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/compile#scala-compiler-help"},"--scalac-help")," option instead")))),(0,l.kt)("h3",{id:"deprecated-and-unsupported-old-scala-runner-options"},"Deprecated and unsupported old ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala")," runner options"),(0,l.kt)("p",null,"The following old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner options have been deprecated and even though they are accepted by Scala CLI (passing\nthem will not cause an error), they are ignored with an appropriate warning:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-save"),", refer to ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/package#library-jars"},"the ",(0,l.kt)("inlineCode",{parentName:"a"},"package")," sub-command")," on how to package a Scala CLI\nproject to a JAR"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-nosave"),", a JAR file is now never saved unless ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/package"},"the ",(0,l.kt)("inlineCode",{parentName:"a"},"package")," sub-command")," is called"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-howtorun")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"--how-to-run"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Scala CLI assumes how a file is to be run based on its file extension (and optionally its shebang header). This\ncannot be overridden with a command line option, so ensure your inputs use the correct file extension or have\nthe ",(0,l.kt)("a",{parentName:"li",href:"#example-shebang-script-with-scala-cli"},"shebang header")," defined. This is sort of the equivalent of the\nold ",(0,l.kt)("inlineCode",{parentName:"li"},"-howtorun guess"),"."),(0,l.kt)("li",{parentName:"ul"},"To run the ",(0,l.kt)("inlineCode",{parentName:"li"},"REPL"),", refer to ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/repl"},"the ",(0,l.kt)("inlineCode",{parentName:"a"},"repl")," sub-command")),(0,l.kt)("li",{parentName:"ul"},"This option has been largely replaced with Scala CLI's ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/basics"},"sub-commands")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-I"),", to preload the extra files for the ",(0,l.kt)("inlineCode",{parentName:"li"},"REPL"),", try passing them as inputs\nfor ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/repl"},"the repl sub-command")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-nc")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"nocompdaemon"),", the underlying script runner class can no longer be picked explicitly, as with the old ",(0,l.kt)("inlineCode",{parentName:"li"},"scala"),"\nrunner"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-run")," - Scala CLI does not support explicitly forcing the old run mode. Just pass your sources as inputs and ensure\nthey are in the correct format and extension.")),(0,l.kt)("h3",{id:"scala-compiler-options"},"Scala compiler options"),(0,l.kt)("p",null,"All compiler options are supported when passed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--scalac-option")," flag (or the ",(0,l.kt)("inlineCode",{parentName:"p"},"-O")," alias for short).\nHowever, many compiler options can also be passed directly.\nFor more information, refer\nto ",(0,l.kt)("a",{parentName:"p",href:"/docs/commands/compile#scala-compiler-options"},"the Scala compiler options section of the ",(0,l.kt)("inlineCode",{parentName:"a"},"compile")," sub-command doc"),"."),(0,l.kt)("h2",{id:"how-does-scala-cli-detect-if-its-running-a-script-or-a-main-method"},"How does Scala CLI detect if it's running a script or a main method?"),(0,l.kt)("p",null,"To answer this question, some disambiguation is necessary.\nThe most important thing to note is that this has been handled differently by the 2 old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runners (for\nScala ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")," and for ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x"),"), so a\nconsistent behaviour hasn't really been established before Scala CLI."),(0,l.kt)("p",null,"The Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")," old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner was the most flexible, automatically detecting if what is being run is a script or\nan\nobject based on the source contents. This automatic detection was also possible to be overridden with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-howtorun"),"\nrunner option (which has been\ndeprecated and is not supported in Scala CLI,\nas ",(0,l.kt)("a",{parentName:"p",href:"#deprecated-and-unsupported-old-scala-runner-options"},"noted in an earlier section"),").\nThis also means that the ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")," old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner did not really care about file extensions much."),(0,l.kt)("p",null,"In contrast, the Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x")," old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner always expects to find a main method, potentially but not necessarily\nusing ",(0,l.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/scala3/book/methods-main-methods.html"},"the Scala 3 idiomatic ",(0,l.kt)("inlineCode",{parentName:"a"},"@main")," annotation"),".\nThis means that the Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x")," runner respected main methods defined in ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," files, but did not support script\nsyntax (top level definitions with no explicit main method)."),(0,l.kt)("p",null,"Scala CLI's approach is perhaps the most restrictive here.\nIt accepts explicitly defined main methods in ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," sources and script syntax in ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," sources, without any\nadditional flexibility."),(0,l.kt)("p",null,"The only exception would be files with no file extension, but with a shebang header, ran with the ",(0,l.kt)("inlineCode",{parentName:"p"},"shebang")," sub-command.\nThose are always treated as scripts (more details about this can be\nfound [in ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/shebang"},"the shebang scripts' guide"),"])."),(0,l.kt)("p",null,"Now, to give some examples."),(0,l.kt)("h3",{id:"main-class-in-a-scala-input"},"Main class in a ",(0,l.kt)("inlineCode",{parentName:"h3"},".scala")," input"),(0,l.kt)("p",null,"Of course, the simplest case is putting a main class into a ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," source, which is supported by both of the old\nrunners and by Scala CLI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Main.scala",title:"Main.scala"},'object Main {\n  def main(args: Array[String]): Unit = println(args.mkString(" "))\n}\n')),(0,l.kt)(r.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala Main.scala Hello world\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Main.scala -- Hello world\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello world\n"))),(0,l.kt)("h3",{id:"main-class-in-a-sc-input"},"Main class in a ",(0,l.kt)("inlineCode",{parentName:"h3"},".sc")," input"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=main-in-script.sc",title:"main-in-script.sc"},'object Main {\n  def main(args: Array[String]): Unit = println(args.mkString(" "))\n}\n')),(0,l.kt)("p",null,"This case has been supported by both of the old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runners, but is not supported by Scala CLI, which expects a\nscript in a ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," input and wraps its contents in a main class of its own, not inspecting further for a nested one.\nIn other words, when explicitly declaring a main class when working with Scala CLI, you have to do it in a ",(0,l.kt)("inlineCode",{parentName:"p"},".scala"),"\nfile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli main-in-script.sc -- Hello world \n# no output will be printed\n")),(0,l.kt)("p",null,"Running such an ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," file will not fail by the way, but neither will it print any output, since the appropriate method\nhasn't been called explicitly in the script."),(0,l.kt)("h3",{id:"script-syntax-in-an-sc-file"},"Script syntax in an ",(0,l.kt)("inlineCode",{parentName:"h3"},".sc")," file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=script.sc",title:"script.sc"},'println(args.mkString(" "))\n')),(0,l.kt)("p",null,"This syntax is supported by the old Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")," runner, but ",(0,l.kt)("strong",{parentName:"p"},"not")," by the old Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x")," one.\nThe Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x")," runner does not allow for top level definitions without an explicit main class."),(0,l.kt)("p",null,"However, it is supported by Scala CLI."),(0,l.kt)(r.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli script.sc -- Hello world\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Hello world\n"))),(0,l.kt)("h3",{id:"script-syntax-in-a-scala-file"},"Script syntax in a ",(0,l.kt)("inlineCode",{parentName:"h3"},".scala")," file"),(0,l.kt)("p",null,"Now for the inverted case, where script-style top level definitions are put in a ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=script.scala",title:"script.scala"},'println(args.mkString(" "))\n')),(0,l.kt)("p",null,"This has actually been supported by the old Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")," runner.\nHowever, both the old Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x")," runner as well as Scala CLI do not support it."),(0,l.kt)(r.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"fail",fail:!0},"scala-cli script.scala -- Hello world\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'[error] ./ScriptInScala.scala:1:1\n[error] Illegal start of toplevel definition\n[error] println(args.mkString(" "))\n[error] ^^^^^^^\nError compiling project (Scala 3.2.2, JVM)\nCompilation failed\n'))),(0,l.kt)("h3",{id:"inputs-with-no-extension"},"Inputs with no extension"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=no-extension-script",title:"no-extension-script"},'println(args.mkString(" "))\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=no-extension-main-class",title:"no-extension-main-class"},'object Main {\n  def main(args: Array[String]): Unit = println(args.mkString(" "))\n}\n')),(0,l.kt)("p",null,"Files with no extensions have been supported in the ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")," old runner, but not in ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x"),"."),(0,l.kt)("p",null,"Script syntax in files with no extension (or with extensions not indicating other kinds of sources, like ",(0,l.kt)("inlineCode",{parentName:"p"},".java"),") are\nsupported in Scala CLI via the ",(0,l.kt)("inlineCode",{parentName:"p"},"shebang")," sub-command (and not otherwise).\nHowever, a shebang header is necessary. An example is given\nin ",(0,l.kt)("a",{parentName:"p",href:"#example-shebang-script-with-scala-cli"},"a later section of this guide"),"."),(0,l.kt)("h2",{id:"how-to-migrate-scripts-with-the-old-scala-runner-in-the-shebang-header-to-scala-cli"},"How to migrate scripts with the old ",(0,l.kt)("inlineCode",{parentName:"h2"},"scala")," runner in the shebang header to Scala CLI?"),(0,l.kt)("p",null,"As described\nin ",(0,l.kt)("a",{parentName:"p",href:"#how-has-the-passing-of-arguments-been-changed-from-the-old-scala-runner-to-scala-cli"},"an earlier section of this guide"),",\nthe way the old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner handles arguments differs from Scala CLI."),(0,l.kt)("p",null,"The old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," script accepted arguments with syntax making it easy to use it in a shebang header.\nThat is, all arguments starting with the second were treated as program args, rather than input sources.\nThis is in contrast with the Scala CLI default way of handling arguments, where inputs and program arguments have to be\ndivided by ",(0,l.kt)("inlineCode",{parentName:"p"},"--"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli Source1.scala Source2.scala -- programArg1 programArg2\n")),(0,l.kt)("p",null,"To better support shebang scripts, Scala CLI has a dedicated ",(0,l.kt)("inlineCode",{parentName:"p"},"shebang")," sub-command, which handles arguments similarly to\nthe old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," script."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli shebang Source.scala programArg1 programArg2\n")),(0,l.kt)("p",null,"For more concrete examples on how to change the shebang header in your existing scripts, look below."),(0,l.kt)("h3",{id:"example-shebang-script-with-the-scala-213x-old-scala-runner"},"Example shebang script with the Scala ",(0,l.kt)("inlineCode",{parentName:"h3"},"2.13.x")," old ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala")," runner"),(0,l.kt)("p",null,"This is how an example shebang script could have looked like for the old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner with Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile title=old-scala-shebang-213.sc",compile:!0,title:"old-scala-shebang-213.sc"},'#!/usr/bin/env scala\nprintln("Args: " + args.mkString(" "))\n')),(0,l.kt)("h3",{id:"example-shebang-script-with-the-scala-3x-old-scala-runner"},"Example shebang script with the Scala ",(0,l.kt)("inlineCode",{parentName:"h3"},"3.x")," old ",(0,l.kt)("inlineCode",{parentName:"h3"},"scala")," runner"),(0,l.kt)("p",null,"This in turn is the Scala ",(0,l.kt)("inlineCode",{parentName:"p"},"3.x")," equivalent for its own old ",(0,l.kt)("inlineCode",{parentName:"p"},"scala")," runner."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=old-scala-shebang-3.sc",title:"old-scala-shebang-3.sc"},'#!/usr/bin/env scala\n@main def main(args: String*): Unit = println("Args: " + args.mkString(" "))\n')),(0,l.kt)("h3",{id:"example-shebang-script-with-scala-cli"},"Example shebang script with Scala CLI"),(0,l.kt)("p",null,"This is an example of how a Scala CLI script with a shebang header looks like."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile title=scala-cli-shebang.sc",compile:!0,title:"scala-cli-shebang.sc"},'#!/usr/bin/env -S scala-cli shebang\n  println("Args: " + args.mkString(" "))\n')),(0,l.kt)("p",null,"The example above refers ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli"),", as per the current default Scala CLI distribution.\nIf you have Scala CLI installed as ",(0,l.kt)("inlineCode",{parentName:"p"},"scala"),", then that should be changed to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile title=scala-cli-as-scala-shebang.sc",compile:!0,title:"scala-cli-as-scala-shebang.sc"},'#!/usr/bin/env -S scala shebang\nprintln("Args: " + args.mkString(" "))\n')),(0,l.kt)("p",null,"For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"shebang")," sub-command, refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/commands/shebang"},"the appropriate doc"),".\nFor more details on how to use Scala CLI in shebang scripts, refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/shebang"},"the relevant guide"),"."))}u.isMDXComponent=!0}}]);