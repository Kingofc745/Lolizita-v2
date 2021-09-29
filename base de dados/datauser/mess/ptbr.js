const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
const {p, SeuNome, OwnerNumber, NomeDoBot} = infos

exports.wait = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`
}

exports.tterro = () => {
	return `Você deve digitar ${p}ppt pedra, ${p}ppt papel ou ${p}ppt tesoura`
}

exports.waitmusic = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay = () => {
	return`⏳Comando play aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay1 = () => {
	return`⏳Comando play1 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay2 = () => {
	return`⏳Comando play2 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay3 = () => {
	return`⏳Comando play3 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitfig = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos.`
}

exports.waitgif = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`
}

exports.waitsfw = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar o hentai em até 2 minutos\nTente novamente caso não envie.`
}

exports.waitpor = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`
}

exports.waitimg= () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`
}

exports.leveloff = () => {
	return`『❗』função leveis foi desativada`
}

exports.levelnoton = () => {
	return`『❗』A função leveis está desativada`
}

exports.levelnol = () => {
	return`『❗』Você está level 0... \njá se registrou para começar ganhar XP?`
}

exports.ban = (NomeDoBot) => {
	return`『❗』Você está banido do bot`
}

exports.ownerB = () => {
	return`『❗』Comando só pode ser usado pelo meu dono`
}

exports.stick = () => {
	return`『❗』Ocorreu um erro na criação de sticker`
}

exports.Lv = () => {
	return`『❗』Link inválido`
}

exports.group = () => {
	return`『❗』O comando só pode ser usado em grupos`
}

exports.admin = () => {
	return`『❗』O comando só pode ser usado por administradores do grupo`
}

exports.Badmin = () => {
	return`『❗』O comando só pode ser usado quando o bot é um administrador do grupo`
}

exports.AdmDoBot = () => {
	return`『❗』Cadê o meu adm?? Só pode usar esse comando quando eu me torno administrador`
}

exports.registro = (p, SeuNome, pushname, SeuNumero) => {
	return`
╭⊷╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾⊷╾
┃⋆╭╾╾╾⟨ 🍥 REGISTRE-SE 🍥 ⟩
┃⋆│❍ Olá corno(a)!
┃⋆│❍ Você não está registrado no bot
┃⋆│
┃⋆│❍ Use: ${p}registrar Nome|idade
┃⋆│❍ Exemplo : ${p}registrar ${SeuNome}|18
┃⋆│
┃⋆│❍ Ou ${p}registrar ${pushname}|18
┃⋆│
┃⋆│❍ Usa seu nome, ou nick
┃⋆│❍ Sua idade real, ou fake
┃⋆│
┃⋆│❍ Caso queira ajuda:
┃⋆│❍ http://Wa.me/${SeuNumero}
┃⋆╰─────────────────
╚⊷╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾⊷⊷`
}
exports.rgerrado = (p, pushname) => {
	return`
[❗] Formato de registro errado tente assim:
*${p}rg ${pushname}/15*`
}

exports.rg = (p, pushname) => {
	return`
┌─❖
│*「️COMANDO NEGADO」*
└┬❖
┌┤Para se registrar :
││「📌」Basta digitar: Rg
││Ou: Registrar
│├────────
││ _SISTEMA DE REGISTRO_
│└────────
│Copyright © Tobi/Lolizita 2021
╰─━━━─── • ───━━━❋ཻུ۪۪⸙
`
}

exports.erro = () => {
	return`❌ocorreu um erro❌\n\nTente novamente.`
}


