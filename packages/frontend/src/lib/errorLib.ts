export function onError(error: any) {
	let msg = String(error);

	if((!error instanceof Error) && error.message) {
		msg = String(error.message);
	}
	alert(msg);
}
