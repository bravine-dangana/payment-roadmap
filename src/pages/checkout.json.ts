export const prerender = false;

export async function GET() {
  const wireframe = {
    "mockup": {
      "measuredW": 960,
      "measuredH": 1300,
      "mockupW": 960,
      "mockupH": 1300,
      "controls": {
        "control": [
          {"typeID":"__group__","x":"300","y":"10","w":"320","h":"50","zOrder":"1","properties":{"controlName":"Customer Initiates Payment","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"320","h":"50","zOrder":"1","measuredW":320,"measuredH":50,"properties":{"text":"Customer Initiates Payment","bold":true}}]}}},
          {"typeID":"Arrow","x":"455","y":"60","w":"10","h":"60","zOrder":"2","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"300","y":"120","w":"320","h":"50","zOrder":"3","properties":{"controlName":"MNO Receives Request","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"320","h":"50","zOrder":"1","measuredW":320,"measuredH":50,"properties":{"text":"MNO (Mobile Network Operator)","bold":true}}]}}},
          {"typeID":"Arrow","x":"300","y":"170","w":"10","h":"60","zOrder":"4","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"Arrow","x":"610","y":"170","w":"10","h":"60","zOrder":"5","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"80","y":"230","w":"240","h":"50","zOrder":"6","properties":{"controlName":"STK Push","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"240","h":"50","zOrder":"1","measuredW":240,"measuredH":50,"properties":{"text":"STK Push Sent to Customer"}}]}}},
          {"typeID":"__group__","x":"580","y":"230","w":"240","h":"50","zOrder":"7","properties":{"controlName":"Customer Enters PIN","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"240","h":"50","zOrder":"1","measuredW":240,"measuredH":50,"properties":{"text":"Customer Enters PIN"}}]}}},
          {"typeID":"Arrow","x":"195","y":"280","w":"10","h":"60","zOrder":"8","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"Arrow","x":"695","y":"280","w":"10","h":"60","zOrder":"9","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"300","y":"340","w":"320","h":"50","zOrder":"10","properties":{"controlName":"Safaricom Processes Payment","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"320","h":"50","zOrder":"1","measuredW":320,"measuredH":50,"properties":{"text":"Safaricom Processes Payment","bold":true}}]}}},
          {"typeID":"Arrow","x":"455","y":"390","w":"10","h":"60","zOrder":"11","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"300","y":"450","w":"320","h":"50","zOrder":"12","properties":{"controlName":"Cellulant Payment Gateway","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"320","h":"50","zOrder":"1","measuredW":320,"measuredH":50,"properties":{"text":"Cellulant Payment Gateway","bold":true}}]}}},
          {"typeID":"Arrow","x":"300","y":"500","w":"10","h":"60","zOrder":"13","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"Arrow","x":"610","y":"500","w":"10","h":"60","zOrder":"14","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"80","y":"560","w":"240","h":"50","zOrder":"15","properties":{"controlName":"Transaction Validation","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"240","h":"50","zOrder":"1","measuredW":240,"measuredH":50,"properties":{"text":"Transaction Validation"}}]}}},
          {"typeID":"__group__","x":"580","y":"560","w":"240","h":"50","zOrder":"16","properties":{"controlName":"Fraud and Risk Check","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"240","h":"50","zOrder":"1","measuredW":240,"measuredH":50,"properties":{"text":"Fraud and Risk Check"}}]}}},
          {"typeID":"Arrow","x":"195","y":"610","w":"10","h":"60","zOrder":"17","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"Arrow","x":"695","y":"610","w":"10","h":"60","zOrder":"18","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"300","y":"670","w":"320","h":"50","zOrder":"19","properties":{"controlName":"MNO Sends Confirmation","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"320","h":"50","zOrder":"1","measuredW":320,"measuredH":50,"properties":{"text":"MNO Sends Confirmation","bold":true}}]}}},
          {"typeID":"Arrow","x":"455","y":"720","w":"10","h":"60","zOrder":"20","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"300","y":"780","w":"320","h":"50","zOrder":"21","properties":{"controlName":"Payment Status Determined","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"320","h":"50","zOrder":"1","measuredW":320,"measuredH":50,"properties":{"text":"Payment Status Determined","bold":true}}]}}},
          {"typeID":"Arrow","x":"300","y":"830","w":"10","h":"60","zOrder":"22","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"Arrow","x":"610","y":"830","w":"10","h":"60","zOrder":"23","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"80","y":"890","w":"240","h":"50","zOrder":"24","properties":{"controlName":"Success Response","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"240","h":"50","zOrder":"1","measuredW":240,"measuredH":50,"properties":{"text":"Success Response"}}]}}},
          {"typeID":"__group__","x":"580","y":"890","w":"240","h":"50","zOrder":"25","properties":{"controlName":"Failure Timeout","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"240","h":"50","zOrder":"1","measuredW":240,"measuredH":50,"properties":{"text":"Failure / Timeout"}}]}}},
          {"typeID":"Arrow","x":"195","y":"940","w":"10","h":"60","zOrder":"26","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"Arrow","x":"695","y":"940","w":"10","h":"60","zOrder":"27","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"300","y":"1000","w":"320","h":"50","zOrder":"28","properties":{"controlName":"Webhook Callback","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"320","h":"50","zOrder":"1","measuredW":320,"measuredH":50,"properties":{"text":"Webhook / Callback Fired","bold":true}}]}}},
          {"typeID":"Arrow","x":"455","y":"1050","w":"10","h":"60","zOrder":"29","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"300","y":"1110","w":"320","h":"50","zOrder":"30","properties":{"controlName":"Merchant Notified","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"320","h":"50","zOrder":"1","measuredW":320,"measuredH":50,"properties":{"text":"Merchant Notified of Status","bold":true}}]}}},
          {"typeID":"Arrow","x":"300","y":"1160","w":"10","h":"60","zOrder":"31","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"Arrow","x":"610","y":"1160","w":"10","h":"60","zOrder":"32","measuredW":10,"measuredH":60,"properties":{"p0":{"x":5,"y":0},"p1":{"x":0.5,"y":0},"p2":{"x":5,"y":60}}},
          {"typeID":"__group__","x":"80","y":"1220","w":"240","h":"50","zOrder":"33","properties":{"controlName":"Order Fulfilled","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"240","h":"50","zOrder":"1","measuredW":240,"measuredH":50,"properties":{"text":"Order Fulfilled"}}]}}},
          {"typeID":"__group__","x":"580","y":"1220","w":"240","h":"50","zOrder":"34","properties":{"controlName":"Retry Refund Flow","text":""},"children":{"controls":{"control":[{"typeID":"TextInput","x":"0","y":"0","w":"240","h":"50","zOrder":"1","measuredW":240,"measuredH":50,"properties":{"text":"Retry / Refund Flow"}}]}}}
        ]
      }
    }
  };

  return new Response(JSON.stringify(wireframe), {
    headers: { 'Content-Type': 'application/json' }
  });
}
