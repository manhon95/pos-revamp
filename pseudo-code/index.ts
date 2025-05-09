function printingModuleFactory(
  printerProfilesManager: printerProfilesManager,
  printingTemplates: PrintingTemplates
) {
  const orderRenderer = orderRendererFactory(printingTemplates);
  const receiptRouter = receiptRouterFactory(printerProfilesManager);
  const orderPoller = orderPollerFactory();

  receiptRouter.setRenderFunction(orderRenderer.render);
  orderPoller.setOnNewOrder(receiptRouter.onNewOrder);

  function start() {
    orderPoller.startPolling();
  }

  function stop() {
    orderPoller.stopPolling();
  }

  return { start, stop };
}

function orderPollerFactory() {
  let API_URL = undefined;
  let lastResult = undefined;
  let pollingInterval = undefined;
  let intervalId: number | undefined = undefined;
  let isPolling = false;
  let onNewOrder: (order) => {} | undefined = undefined;

  function setOnNewOrder(inputOnNewOrder) {
    onNewOrder = inputOnNewOrder;
  }

  async function startPolling() {
    intervalId = setInterval(poll(), pollingInterval);
    isPolling = true;
  }
  function stopPolling() {
    clearInterval(intervalId);
    intervalId = undefined;
    isPolling = false;
  }
  async function poll() {
    const response = await fetch(API_URL);
    const result = await response.json();
    checkDelta(result);
    lastResult = result;
  }
  function checkDelta(result) {
    if (lastResult && result !== lastResult) {
      const diff = lastResult - result;
      for (const order of diff) {
        if (onNewOrder) onNewOrder(order);
      }
    }
  }

  return { setOnNewOrder, startPolling, stopPolling };
}

function receiptRouterFactory(
  orderRenderer: OrderRenderer,
  printerProfilesManager: printerProfilesManager
) {
  let renderFunction: (order, receiptTemplateType) => {} | undefined =
    undefined;

  function setRenderFunction(inputRenderFunction) {
    renderFunction = inputRenderFunction;
  }

  function onNewOrder() {
    for (const receiptTemplateType of ["KITCHEN", "FRONT"]) {
      const printerProfiles =
        printerProfilesManager.getPrinterProfiles(receiptTemplateType);
      if (printerProfiles.length() > 0) {
        const renderedReceipt = orderRenderer.render(
          order,
          receiptTemplateType
        );
        for (const printerProfile of printerProfiles) {
          printerProfile.addTask(renderedReceipt);
        }
      }
    }
  }

  return { setRenderFunction, onNewOrder };
}

function orderRendererFactory(printingTemplates: PrintingTemplates) {
  function render(order, receiptTemplateType) {
    let receipt;
    //render receipt here
    return receipt;
  }

  return { render };
}

function printerProfilesFactory(
  inputName: string,
  inputLocation: string,
  inputEnableReceiptTemplateType: string,
  inputPrinter: Printer
) {
  let name = inputName;
  let location = inputLocation;
  let enableReceiptTemplateType = inputEnableReceiptTemplateType;
  let printer = inputPrinter;
  let taskQueue = taskQueueFactory(name);
  let isPrinting = false;

  taskQueue.addWorker("printReceipt", async (id, payload) => {
    if (printer && printer.isConnected) {
      printer.print(payload);
    }
  });

  function addTask(renderedReceipt: RenderedReceipt) {
    taskQueue.enqueue(taskQueue);
  }

  async function startPrinting() {
    taskQueue.start();
  }

  async function stopPrinting() {
    taskQueue.stop();
  }

  async function connectPrinter() {
    await printer.connect();
  }

  async function disconnectPrinter() {
    await printer.disconnect();
  }

  async function changePrinter(newPrinter: Printer) {
    if (printer.isConnected) await disconnectPrinter();
    printer = inputPrinter;
    await connectPrinter();
  }

  return {
    addTask,
    startPrinting,
    stopPrinting,
    connectPrinter,
    disconnectPrinter,
    changePrinter,
  };
}
