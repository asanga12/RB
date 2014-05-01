function insertdata(dbname,collection,numberofrecords){

var col=db.getSiblingDB(dbname).getCollection(colName);

for(i=1;i<=numberofrecords;i++)
{

col.insert({x:i})
}
print(col.count());

}
