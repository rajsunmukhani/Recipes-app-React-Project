Step 1: 

    First of all, we need to set the code, to increase its readability, for that at first we will get to the entry point that is, App.jsx and set the routes which are littered on the page, for that we will create a folder named Routes to keep all the routes.

    Cut the <Routes></Routes> content under these tags , make a file named MainRoutes.jsx in Routes folder and create component using *rafce* and paste the cutted Routes data under its views section after return.

    import all the required things in the newly made file MainRoutes.jsx.

    Now, make the use of MainRoutes.jsx in App.jsx.
    Dont forget to import it in App.jsx for using.

Step 2: 

    Now, as we can see that the createRecipes button is visible on home page which we do not want to.
    The reason why it is visible is that we are using same component named recipes twice in our project, once in home page and second number, and another in recipes page, now we want that despite the component is used twice, the create Recipes button in that should be visible only once and that is in Recipes page.

    For that we will be using *useLocation hook* as:

    *const s = useLocation();
    console.log(s);*

    Write this in recipes.jsx in javaScript section to get the pathname in log, now as we are getting that the pathname of home page is */* but in recipes the pathname is *recipes*

    hence we will replace *s* with *{pathname}*

    and then we will use condtionals at the displaying of that page, that if the pathname is *recipes* then only display the button otherwise not.As:

    as in javascript:
    *const {pathname} = useLocation();*

    and in views section:
    *{pathname === '/recipes' && (
        <a
            href="/create-recipe"
            className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%]  bg-green-200 gap-x-3 flex items-center"
        >
            <i className="text-3xl text-green-600 ri-add-box-line"></i>
                Create Recipe
        </a>
    )}*

    (this means that id pathname is *recipes* then only display the button)

Step 3:

    Now, we will be working on create recipe page, for that get to the Create.jsx file,
    Here, we see that on submission of form the data gets to the console, here we want new and unique id everytime we create a new recipe, for that we will install nanoid package to give us a unique id as :

        *npm i nanoid*

    now at the place of id in initialization and declaration of newRecipe variable we will use nanoid package.

Step 4:

    Now as we can see that user can submit the new recipe without even filling some data, for that we will validate the fields in form so, that no submission could take place until data is provided in the form.

    Do this by own.

Step 5:
     Now, as the recipes get uploaded by the user, we have to show the recipe which can be used to show anywhere in the whole webapp, for that we have two options, either we can save the recipe in parent components and then drill it using props and props drilling to get the data in child components, or we can simply use context to get the data.

    We will be using Context hook to achieve our target, for that we will, 

    => At first create a folder named context and then inside it create a file named    RecipeContext.jsx and inside it write *rafce*

    => Now, we will wrap the whole BrowserRouter inside <RecipeContext></RecipeContext> tags so that we can use it in whole web application.

Step 6:
    now, create context in RecipeContext.jsx as:

        *import { createContext, useState } from "react"


        export const recipecontext = createContext(null)

        const RecipeContext = (props) => {
            const [recipes, setrecipes] = useState([])
            return (
                <recipecontext.Provider value={[recipes,setrecipes]}>
                    {props.children}
                </recipecontext.Provider>
            )
        }

        export default RecipeContext*

Step 7:
    now, come back to Create.jsx page and in javascript section write as:
        *const [recipe,setrecipe] = useContext(recipecontext);*

    and to save data in recipe useState 
    (after initialization and declaration of newrecipe usestate):
        *setrecipes([...recipes,newrecipe])*

    Now, console.log the recipes state to check whether the data is getting updated inside it on submission of form or not.

Step 8:

    Now, for a sample data in the array of  recipes we will copy the data from card.jsx page and paste it at the time of defining useState recipes inside the first value as:

        hence,

        *const [recipes, setrecipes] = useState([])*

        will get updated to:

        *const [recipes, setrecipes] = useState([
                {
                id: "mAi6vrfNOmNe1LdgZ_MTd",
                title: "Italian Wedding Soup ",
                image: "https://png.pngtree.com/png-clipart/20231127/original/pngtree-high-angle-view-of-italian-wedding-soup-in-a-bowl-on-png-image_13728005.png",
                description:
                    "The BEST Italian Wedding Soup! A delicious and hearty soup made with bite size herbed beef and pork meatballs, veggies and acini de pepe",
                ingredients:
                    "1/2 lb Ground beef|1/2 lb Ground veal|1/4 c Italian seasoned bread crumb|1 Egg|1 tb Parsley|Salt and pepper to taste|4 c Chicken broth|2 c Spinach leaves cut into piec|1/4 c Grated Pecorino Romano chees",
                instructions:
                    "Combine the ground meat, bread crumbs, egg, parsley, salt and pepper in a bowl. Mix well and form into tiny meat balls. Bake on a cookie sheet for 30 minutes at 350F. Meanwhile, bring broth to a boil and add spinach. Cover and boil for 5 minutes. Add the meatballs to the hot broth, bring to a simmer. Stir in the cheese and serve immediately. Rita in Scottsdale 01/02/92 01:41 am",
            }
        ])*


Step 9 :
        We want a message to be printed at the time of recipe created saying
            *Recipe created successfully*

        for that we would be using react toastify, for that run command
            *npm i --save react-toastify*

        now, get to the parent div viz. main.jsx
            *import {ToastContainer} from "react-toastify";
            import "react-toastify/dist/ReactToastify.css";*
        
        now, beside <App/> in main.jsx write
            <ToastContainer />

Step 10 :
        now go to create.jsx page and at end in javaScipt area write
            *toast.success(Recipe Created Succesfully!)*

            dont forget to check whether toast is imported or not.

        Also, after creation of recipe is completed we want to navigate the user to 
        /recipes for that we will:

            at first in create.jsx page at top in javascript area write
                *const navigate = useNavigate();*
            and, in end write
                *navigate("/recipes");*

Step 11:

    Now, we will be working on taking input from user, for that we will at first in Recipes.jsx page write:

        *import {recipecontext} from '../contexts/RecipeContext';
        const [recipes] = useContext(recipecontext);*

    Now, in card.jsx we have to fill data for recipe as:
    Here, on submitting the recipe data we will be getting a new card on recipe page with same data as old card, for fixing that

        replace the predetermined static data with :

            const {id,title, image, description, instructions , ingredients} = props.recipe
    
    Now, we can see that our card contains dynamic data now, but on clicking on the card every card contains the same static data as it was in first card, therefor to fix it,

        for details to get dynamic at first we see that card is holded under a Link tag which is directed to the URL : */recipes/1* which should be dynamic as */recipe/${id}*

    Now, making its route accessible for that, go to MainRouter.jsx and update the route
        */recipe/1* to */recipe/:id*

    Here, we are done with routing, now to change data from static to dynamic for that go to the page details.jsx and,

        now, here in Details.jsx page, we can see that we can not access the data using props as here there is no parent child relationship, so we have to use context to get the data, for that we will write :

            const [recipes] = useContext(recipecontext);
            const {id} = useParams();     // dont forget to import it.
            console.log(id);

            If this working, then :

            remove the static data from const recipe and,
            replace it with :   
                const recipe = recipes.find(r => r.id === id);
                   (at top) const {id} = useParams(); // dont forget to import it.

    we're done with details now, as it shows the actual data of newly made recipe as we made it.

Step 12:
    Now, we want to make the delete functionality of the recipe as on clicking the delete button we can easily delete the recipe.

    For that we just need to go to the Details.jsx page and under it in Delete button we we'll here we can see that the button has an onclick event applied which directs to deketeHandler function which generally prints "delete recipe" on console, now, we have to edit that function and add following data

        *setrecipes(recipe.filter(r => r.id != id));
        toast.success('Recipe deleted successfully!!);
        navigate('/recipes);*

        (add setrecipes with recipes while taking it from context, also make the use of useNavigate hook in navigate variable and also, use toast, to provide the message)

Step 13: 
    Now, we will be making update Link come in action for that we will at first replace its statically type "to" data to dynamic route 
        "/update-recipe/1" => `/update/recipe/${id}`

    Now, go to the mainRouter.jsx page and change the staic route named */update-recipe/1* to */update/recipe/:id*

    Now, got to the update.jsx page and here, we want all recipes first so that we can find the recipe to be updated and then update that recipe, for that we be using context to get the recipe at first and then we will perform other functions accordingly:

        const [recipes,setrecipes] = useContext(recipecontext); 
                                //(dont forget to import the usecontext and recipecontext)

        also, remove the statically typed const {recipes} with value, and

        Now, making re-publish the data button work. For that we'll:
            as we see till now the button is giving in console, the updated data

        now, to save that updated data, we will simply first copy the previous recipes array, then we will find index of that recipe to be updated from copyrecipes by matching the id, got from params, now, we will update the recipe by replacing the old data from new one, at the index found, and we will set the copyrecipe as the recipes as coded:

            const navigate = useNavigate();                    (at top in javascript)
            const copyrecipe = [...recipes];
            const index = copyrecipe.findIndex((r) => r.id === id); 
                                                                // const {id} = useParams()
            copyrecipe[index] = updatedRecipe;
            setrecipes(copyrecipe);

            toast.succes(Recipe Updated Successfully!!);
            navigate("/recipes");