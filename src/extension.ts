import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "onixclientlogger" is now active!');
	let disposable = vscode.commands.registerCommand('onixclientlogger.Logger', () => {
		vscode.window.showInformationMessage('Onix Client Logger Initialized!');
		
		const outputChannel = vscode.window.createOutputChannel('Onix Client Logger');
		outputChannel.show();
		
		const filePath = `${process.env.LOCALAPPDATA}\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\RoamingState\\OnixClient\\Scripts\\Data\\OnixVSLogs\\OnixVSLogs.txt`;
		
		fs.watch(filePath, (event, filename) => {
			if (event === 'change' && filename === 'OnixVSLogs.txt') {
				fs.readFile(filePath, 'utf-8', (err, data) => {
					if (err) {
						vscode.window.showErrorMessage('An error occurred while reading the file.');
						return;
					}
					outputChannel.clear();
					outputChannel.appendLine(data);
				});
			}
		});
	});
	
	context.subscriptions.push(disposable);
}

export function deactivate() {}
