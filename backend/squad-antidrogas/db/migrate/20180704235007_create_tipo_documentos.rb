class CreateTipoDocumentos < ActiveRecord::Migration[5.2]
  def change
    create_table :tipo_documentos do |t|
      t.integer :id_tipo_documento
      t.text :descripcion

      t.timestamps
    end
  end
end
