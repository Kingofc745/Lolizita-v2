const help = (p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, NomeDoBot, SeuNome, OwnerNumber) => {
 return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
└┬『❗INFO DO BOT❗』
┌┤⪧ Pʀᴇғɪx:『${p}』
┃│⪧ Hᴏʀᴀ: ${hr}
┃│⪧ Tᴏᴛᴀʟ ᴄʜᴀᴛ: ${chatss}
┃│⪧ Bᴀᴛᴇʀɪᴀ: ${bateria}
┃╰═════════════⊷
└╦═════════════⊷
┌┤『❗SEU PERFIL❗』
┃╞═════════════⊷
┃│⪧ Nᴏᴍᴇ: ${pushname}
┃│⪧ Tɪᴘᴏ ᴅᴇ ᴜsᴜᴀʀɪᴏ: ${prema}
┃│⪧ Dɪɴʜᴇɪʀᴏ: ${checATM}
┃│⪧ Lᴇᴠᴇʟ: ${useLevel}
┃│⪧ Xᴘ: ${useXp}/${requireXp}
┃│⪧ Pᴀᴛᴇɴᴛᴇ: ${patt}                        
┃╰═════════════⊷
└╦═════════════⊷
┌┤『❗GRUPO/ADMS❗』
┃╞═════════════⊷
┃│⪧ ${p}Banir 『@Tag』
┃│⪧ ${p}Add 『Numero』 
┃│⪧ ${p}Promover 『@Tag』
┃│⪧ ${p}Rebaixar 『@Tag』
┃│⪧ ${p}Setnome 『Nome』
┃│⪧ ${p}Setdesk 『Nome』
┃│⪧ ${p}Setppgc 『Foto』
┃│⪧ ${p}Del 『Msg do bot』
┃│⪧ ${p}Notif 『Texto』
┃│⪧ ${p}Welcome 『On/Off』
┃│⪧ ${p}Leveling 『On/Off』
┃│⪧ ${p}Antilink 『On/Off』
┃│⪧ ${p}Antifake 『On/Off』
┃│⪧ ${p}Abrir 
┃│⪧ ${p}Fechar 
┃│⪧ ${p}Totag 
┃│⪧ ${p}Marcar 
┃│⪧ ${p}Infogp 
┃│⪧ ${p}Listadmin 
┃│⪧ ${p}Linkgp 
┃│⪧ ${p}Supertag 
┃└═════════════⊷
└╦═════════════⊷
┌┤『❗ STICKERS❗』
┃╞═════════════⊷
┃│⪧ ${p}F 『Foto/Gif』
┃│⪧ ${p}St 『Foto/Gif』
┃│⪧ ${p}Stk『Foto/Gif』
┃│⪧ ${p}Toimg『Sticker』
┃│⪧ ${p}Togif『Sticker』
┃│⪧ ${p}Attp 『Texto』
┃│⪧ ${p}Rename 『Sticker』
┃└═════════════⊷
└╦═════════════⊷
┌┤『❗MUSICAS❗』
┃╞═════════════⊷
┃│⪧ ${p}Play『Nome』
┃│⪧ ${p}Play1『Nome』
┃│⪧ ${p}Play2『Nome』
┃│⪧ ${p}Play3『Nome』
└╦═════════════⊷
┌┤『❗AUDIO❗』
┃╞═════════════⊷
┃│⪧ ${p}Tomp3『Video』
┃│⪧ ${p}Rapido『Audio』
┃│⪧ ${p}Devagar『Audio』
┃│⪧ ${p}Esquilo『Audio』
┃│⪧ ${p}Gigante『Audio』
┃│⪧ ${p}Rapid『Audio』
┃│⪧ ${p}Baixo『Audio』
┃│⪧ ${p}Estourar『Audio』
┃└═════════════⊷
└╦═════════════⊷
┌┤『❗NUVEM❗』
┃╞═════════════⊷
┃│⪧ ${p}Liststik
┃│⪧ ${p}Addstik『Sticker』
┃│⪧ ${p}Getstik『Nome』
┃│⪧ ${p}Listvn
┃│⪧ ${p}Addvn『Audio』
┃│⪧ ${p}Getvn『Nome』
┃│⪧ ${p}Listimg
┃│⪧ ${p}Addimg『Foto』
┃│⪧ ${p}Getimg『Nome』
┃│⪧ ${p}Listvid
┃│⪧ ${p}Addvid『Video』
┃│⪧ ${p}Getvid『Nome』
┃└═════════════⊷
└╦═════════════⊷
┌┤『❗JOGOS❗』
┃╞═════════════⊷
┃│⪧ ${p}Amongus『@Tag』
┃│⪧ ${p}Getname『@Tag』
┃│⪧ ${p}Sn『Pergunta』
┃│⪧ ${p}Chance『Pergunta』
┃│⪧ ${p}Ttt『Dificuldade』
┃│⪧ ${p}Lolizita『Texto』
┃│⪧ ${p}Ddd『ddd?』
┃│⪧ ${p}Level 
┃│⪧ ${p}Ranklevel 
┃│⪧ ${p}Dado 
┃│⪧ ${p}Tagme 
┃│⪧ ${p}Ppt 
┃│⪧ ${p}Gado 
┃│⪧ ${p}Pau 
┃│⪧ ${p}Slot 
┃│⪧ ${p}Gay 
┃│⪧ ${p}Roleta 
┃│⪧ ${p}Caracoroa
┃└═════════════⊷
└╦═════════════⊷
┌┤『❗HENTAIS❗』
┃╞═════════════⊷
┃│⪧ ${p}Hentai
┃│⪧ ${p}Neko
┃│⪧ ${p}Eroneko
┃│⪧ ${p}Kitsune
┃│⪧ ${p}Pussy
┃│⪧ ${p}Trapnime
┃│⪧ ${p}Bj
┃└═════════════⊷
└╦═════════════⊷
┌┤『❗ANIMES❗』
┃╞═════════════⊷
┃│⪧ ${p}Wallpaper
┃│⪧ ${p}Megumin
┃│⪧ ${p}Neko2
┃│⪧ ${p}Beijo
┃│⪧ ${p}Feedsfw
┃│⪧ ${p}Nhug
┃│⪧ ${p}Foxgirl
┃│⪧ ${p}Sfwpat
┃│⪧ ${p}Sfwkiss
┃│⪧ ${p}Sfwpoke
┃│⪧ ${p}Sfwsmug
┃│⪧ ${p}Sfwpat
┃│⪧ ${p}Kemonomimi
┃└═════════════⊷
└╦═════════════⊷
┌┤『❗DONO❗』
┃╞═════════════⊷
┃│⪧ ${p}Bc『Texto』
┃│⪧ ${p}Bcstik『Sticker』
┃│⪧ ${p}Clone『@Tag』
┃│⪧ ${p}Bloquear『@Tag』
┃│⪧ ${p}Desbloquear『@Tag』
┃│⪧ ${p}Ban『@Tag』
┃│⪧ ${p}Unban『@Tag』
┃│⪧ ${p}Antipalavras『On/Off』
┃│⪧ ${p}Addpalavra『Palavra』
┃│⪧ ${p}Delpalavra『Palavra』
┃│⪧ ${p}Setname『Nome do bot』
┃│⪧ ${p}Setprefix『Prefix』
┃│⪧ ${p}Setdono『Nome』
┃│⪧ ${p}Setowner『55xxx』
┃│⪧ ${p}Listname
┃│⪧ ${p}Ping
┃│⪧ ${p}Visuchat
┃│⪧ ${p}Bloqueados
┃│⪧ ${p}Desligar
┃│⪧ ${p}Reiniciar
┃│⪧ ${p}Clearall
┃└═════════════⊷
╰┬═════════════⊷
┌┤➤ *𝙸ɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇs* 
┃│
┃│• > 𝙳𝚘𝚗𝚘:  ${SeuNome}
┃│• => ${p}Dono
┃│✙◗ _${NomeDoBot}_
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙
      *「${NomeDoBot}」*`
}
exports.help = help
