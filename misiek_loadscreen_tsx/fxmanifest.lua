fx_version "cerulean"

description "Basic React (TypeScript) & Lua Game Scripts Boilerplate"
author "✪ Misiek™#9040"
version '1.0.0'
repository 'https://github.com/project-error/fivem-react-boilerplate-lua'

lua54 'yes'

loadscreen 'web/build/index.html'
loadscreen_manual_shutdown 'no'
loadscreen_cursor 'yes'

games {
  "gta5",
  "rdr3"
}

client_script "client/**/*"

files {
	'web/build/index.html',
	'web/build/**/*',
}