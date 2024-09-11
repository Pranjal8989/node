module.exports = {
    extends : ["@commitlint", "@commitlint/config-conventional"],
    rules : {
"type-enum" :[
    2,
    "always",[
        "feat",
        "fix",
        "docs",
        "redactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert"
    ]
],
"subject-case" : [2,"always","sentence-case"]
    }
}