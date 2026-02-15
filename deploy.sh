#!/bin/bash

# Configurações
HOST="192.168.122.93"
USER="root"
PASS="1610"
DEST="/var/www/html/marvel-quiz"
BUILD_DIR="dist/buzzfeed-marvel/browser"

echo "========================================"
echo "Iniciando Deploy para $HOST"
echo "========================================"

# Verificar se sshpass está instalado
if ! command -v sshpass &> /dev/null; then
    echo "Erro: sshpass não encontrado. Instale com: apt-get install sshpass (ou equivalente)"
    exit 1
fi

# Criar diretório remoto se não existir
echo "Criando diretório remoto..."
sshpass -p "$PASS" ssh -o StrictHostKeyChecking=no $USER@$HOST "mkdir -p $DEST"

# Enviar arquivos
echo "Enviando arquivos..."
sshpass -p "$PASS" scp -o StrictHostKeyChecking=no -r $BUILD_DIR/* $USER@$HOST:$DEST/

echo "========================================"
echo "Deploy Concluído!"
echo "Acesse: http://$HOST/marvel-quiz (dependendo da config do Nginx/Apache)"
echo "========================================"
