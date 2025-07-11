import db from '../db.js'
import slugify from 'slugify';


function checkSlug(slug){
    const stmt = db.prepare(`SELECT slug FROM products WHERE slug = ?`);
    return stmt.get(slug);
}

function dbAdd(product_name, description, superCategory, category, brand, sku, img, price, date){
    try {
        const slug = slugify(`${brand}-${product_name}`, {
            lower: true,
            remove: /[*+~.,()'"!:@/åäö]/g,
        })

        const slugifiedSuperCategry = slugify(superCategory, {
            lower: true,
            remove: /[*+~.,()'"!:@/åäö]/g,
        })

        const slugifiedCategry = slugify(category, {
            lower: true,
            remove: /[*+~.,()'"!:@/åäö]/g,
        })


        let i = 1;
        let newSlug = slug;

        while(checkSlug(newSlug)){
            newSlug = `${slug}-${i}`;
            i++;
        }


        const stmt = db.prepare(
            `INSERT INTO products(
            product_name,
            description,
            supercategory,
            supercategory_slug,
            category,
            category_slug,
            brand,
            sku,
            img,
            price,
            date,
            slug)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
            stmt.run(product_name, description, superCategory, slugifiedSuperCategry, category, slugifiedCategry, brand, sku, img, price, date, newSlug);
    } catch (error) {
        console.error(error.message);
        
        return error.message;
    }
}

function dbGetForAdmin(){
    try {
        const stmt = db.prepare(`
            SELECT
            id,
            product_name,
            category,
            brand,
            sku,
            price
            FROM products
            ORDER BY id DESC`)
        return stmt.all();
    } catch (error) {
        console.error(error.message)
        return null;
    }
}

function dbDelete(id){
    try {
        const stmt = db.prepare(`
            DELETE FROM products WHERE id = ?
            `)
        stmt.run(id);
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { dbAdd, dbGetForAdmin, dbDelete }