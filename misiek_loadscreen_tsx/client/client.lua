---@param action string
---@param data table | boolean
local function sendNuiMessage(action, data)
  SendNUIMessage({
    action = action,
    data = data
  })
end

RegisterNUICallback("handover", function(data, cb)
  TriggerEvent("data:handover", data)

  sendNuiMessage('setVisible', false)
  ShutdownLoadingScreenNui()
  ShutdownLoadingScreen()

  cb("ok")
end)

SendLoadingScreenMessage(json.encode({
  handover = true
}))