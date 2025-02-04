export class WhenStatics {

    public static mockGitConfigEmail = {
        cmdArgs: ["git", "config", "user.email"],
        returnValue: {stdout: "test@test.com\n"},
    };
    public static mockGitConfigName = {
        cmdArgs: ["git", "config", "user.name"],
        returnValue: {stdout: "Testersen\n"},
    };
    public static mockUID = {
        cmdArgs: ["id", "-u"],
        returnValue: {stdout: "990\n"},
    };
    public static mockGitRemote = {
        cmdArgs: ["git", "remote", "-v"],
        returnValue: {stdout: "origin\tgit@gitlab.com:gcl/test-project.git (fetch)\norigin\tgit@gitlab.com:gcl/test-project.git (push)\n"},
    };
    public static mockGitDefaultBranch = {
        cmdArgs: ["git", "symbolic-ref", "--short", "refs/remotes/origin/HEAD"],
        returnValue: {stdout: "origin/main"},
    };
    public static mockGitBranchName = {
        cmdArgs: ["git", "rev-parse", "--abbrev-ref", "HEAD"],
        returnValue: {stdout: "master"},
    };
    public static mockGitCommitSha = {
        cmdArgs: ["git", "rev-parse", "HEAD"],
        returnValue: {stdout: "02618988a1864b3d06cfee3bd79f8baa2dd21407"},
    };
    public static mockGitCommitShaShort = {
        cmdArgs: ["git", "rev-parse", "--short", "HEAD"],
        returnValue: {stdout: "0261898"},
    };

    public static all = [
        WhenStatics.mockGitConfigEmail,
        WhenStatics.mockGitConfigName,
        WhenStatics.mockUID,
        WhenStatics.mockGitRemote,
        WhenStatics.mockGitDefaultBranch,
        WhenStatics.mockGitBranchName,
        WhenStatics.mockGitCommitSha,
        WhenStatics.mockGitCommitShaShort,
    ];

}
