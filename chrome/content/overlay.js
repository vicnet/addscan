function AddScan() {
//	alert("Add Attachement");
//    let name = "file:///tmp/test.txt";
	var name = "/tmp/test.txt";

	var process = Components.classes["@mozilla.org/process/util;1"]
              .createInstance(Components.interfaces.nsIProcess);
	var file = Components.classes["@mozilla.org/file/local;1"].
           createInstance(Components.interfaces.nsILocalFile);

	file.initWithPath("/tmp/ls.sh");
//	file.initWithPath("/bin/ls");
//	var args = [" > "+name];
	var args = ["test"];
	process.init(file);
	process.run(true, args, args.length);

	file.initWithPath(name);

    AddAttachments([FileToAttachment(file)]);
	alert("Add Scan Attachement Ok");
}
