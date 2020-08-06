from pymodm import connect, MongoModel, fields

connect("mongodb+srv://Blossom:tiQ4rLRUBM57jzb@cluster0.dvxvf.mongodb.net/Personal-webpage?retryWrites=true&w=majority")

class Messages(MongoModel):
    name = fields.CharField(required=True, blank=False)
    email = fields.CharField(required=True, blank=False)
    message = fields.CharField(required=True, blank=False)