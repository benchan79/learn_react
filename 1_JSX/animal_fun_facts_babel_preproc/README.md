# Run JSX Preprocessor

```
npx babel --watch src --out-dir . --presets react-app/prod
```

1. This command starts an automated watcher for JSX.

2. The watcher will create a preprocessed filew with the plain JavaScript code suitable for the browser. 

3. When you edit the source file with JSX, the transform will re-run automatically.