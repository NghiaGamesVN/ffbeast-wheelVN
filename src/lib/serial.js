let port = null;
let writer = null;

export async function getFFBPorts() {
  const ports = await navigator.serial.getPorts();
  return ports;
}

export async function requestFFBPort() {
  const port = await navigator.serial.requestPort();
  const info = port.getInfo();
  return { port, info };
}

export async function openPort(selectedPort) {
  await selectedPort.open({ baudRate: 115200 });
  writer = selectedPort.writable.getWriter();
  return selectedPort;
}

export async function sendSerial(data) {
  if (!writer) return;
  const encoder = new TextEncoder();
  await writer.write(encoder.encode(data + "\n"));
}
