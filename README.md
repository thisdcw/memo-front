# 

## 打包成docker

```bash
docker build -t memo-front:v0.0.1 .
```

## 启动


```bash
docker run -d -p 5173:80 --name memo-front memo-front:v0.0.1
```
