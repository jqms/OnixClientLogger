Logs Onix Client scripting logs to the VS console, use importLib("OnixClientVSLogger") in your code to import the library, and use vs.log() to log stuff.

## Requirements
-[Onix Client Premium Scripting](https://onixclient.com/patreon) is required to use the Onix Client Logger extension.
OnixClientLogger library (will be automatically downloaded when you import the library)

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