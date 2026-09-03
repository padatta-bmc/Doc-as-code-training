# Troubleshooting

This guide describes the most common issues with GitHub Copilot and how to resolve them.

<details>
<summary>Why can't I push my changes?</summary>
 
Make sure you:
 
1. Have committed your changes.
2. Are connected to the correct remote repository.
3. Have permission to push to the repository.
 
</details>

## Unable to use the GitHub Copilot extension in the IDE

We recommend you follow the quickstart guide for GitHub Copilot while setting up GitHub Copilot on your machine. For more information, see Quickstart for GitHub Copilot.

The GitHub Copilot extension is frequently updated to fix bugs and add new features. It's important to keep your extension up to date because older clients cannot communicate with the GitHub Copilot servers. Update your GitHub Copilot extension on all the machines you have it installed.

<details>
<summary>Error: "GitHub Copilot could not connect to server. Extension activation failed"</summary>

This error indicates that you do not have a Copilot plan, or there was an error connecting to the GitHub API to request a token to use GitHub Copilot.

To request another token from api.github.com, try signing in and out of Copilot from your IDE. Once you've logged out, Copilot will prompt you to sign back in.

</details>



