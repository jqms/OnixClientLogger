Logs Onix Client Scripting logs to the Visual Studio Code console.

## Requirements
- [Onix Client Premium Scripting](https://onixclient.com/patreon) is required to use the Onix Client Logger extension.
- OnixClientLogger library (will be automatically downloaded when you import the library)

## Usage

```lua
-- Import the library
importLib("OnixClientLogger")

-- Log a message to the console
vs.log("Hello World!")

-- Clear the log file
vs.clearLog()


-- Example
importLib("OnixClientLogger")

function postInit()
    vs.clearLog()
    vs.log("Hello World!")
end
```


### 1.0.0

Initial release of Onix Client Logger.
