// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as child_process from 'child_process';

function currentPageUri() {
	return vscode.window.activeTextEditor
		&& vscode.window.activeTextEditor.document
		&& vscode.window.activeTextEditor.document.uri;
  }

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const openFileInTypora = vscode.commands.registerCommand('extension.openFileInTypora', (fileUri: vscode.Uri) => {
		console.log('openFileInTypora', fileUri);
		
		let filePath = fileUri?.fsPath || currentPageUri()?.fsPath;
		if (!filePath) {
			vscode.window.showErrorMessage(`No file selected.`);
			return;
		}
		if (filePath.endsWith('.md')) {
		  if (process.platform === 'darwin') {
			child_process.exec(`open -a typora ${filePath}`);
		  } else if (process.platform === 'win32') {
			// 需先配置好环境变量
			child_process.exec(`start typora ${filePath}`);
		  } else {
			vscode.window.showErrorMessage(`Unsupported platform: ${process.platform}`);
		  }
		} else {
		  vscode.window.showErrorMessage(`The selected file is not a Markdown file.`);
		}
	});
	
	context.subscriptions.push(openFileInTypora);
}

// This method is called when your extension is deactivated
export function deactivate() {}
