# bc_phincon_2

Langkah-langkah untuk git
- git init
- git status => cek status di folder project
- git add => menambahkan file yg akan di commit
- git commit -m "[comit message]"
- git remote -v => untuk mengecek repository online
- git remote add origin [url-repository] => untuk di set remote url nya, di push ke mana
- git remote set-url origin [url-repository] => untuk set remote url jika udah ada url existing
- git push => untuk push ke repository
- git push origin [name-branch] => push ke repository dengan nama branch tertentu
- git switch [name-branch] => untuk mengganti posisi branch yang aktif
- git checkout -b [name-branch] => untuk membuat branch bary berdasarkan referensi aktif branch
- git merge [name-branch] => untuk menggabungkan aktif branch ke branch yg di tuju
- git merge [name-branch] => --allow-unrelated-histories => untuk menggabungkan aktif branch ke branch yg di tuju (dilakukan pertama kali jika tidak ada samasekali comitan di awal)