package main

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

// ...

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {
	db, err := sql.Open("mysql", "xxmsu:xxmsp@tcp(47.52.95.132:3306)/test?charset=utf8")
	checkErr(err)
	// See "Important settings" section.
	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	//插入数据
	// stmt, err := db.Prepare("INSERT INTO ddd SET ddd=?")
	stmt, err := db.Prepare("INSERT INTO userinfo SET username=?,department=?,created=?")
	checkErr(err)

	// res, err := stmt.Exec("我日")
	res, err := stmt.Exec("astaxie", "研发部门", "2012-12-09")
	checkErr(err)

	fmt.Println(res)
}
